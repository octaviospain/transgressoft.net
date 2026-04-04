import { NextResponse } from "next/server"

import { BookData, parseGoodreadsRss } from "@/lib/goodreads"

const REVALIDATE_SECONDS = 60 * 60 * 6 // 6 hours
const ERROR_REVALIDATE_SECONDS = 60 * 60 * 1 // 1 hour on failure
const FETCH_TIMEOUT_MS = 8000 // 8 second timeout

const DEFAULT_SHELVES = "currently-reading,read"

async function fetchShelf(userId: string, shelf: string): Promise<string | null> {
  const url = `https://www.goodreads.com/review/list_rss/${userId}?shelf=${shelf}`
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    })

    if (!res.ok) return null

    return await res.text()
  } catch {
    return null
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function GET() {
  const userId = process.env.GOODREADS_USER_ID
  const shelfList = (process.env.GOODREADS_SHELVES ?? DEFAULT_SHELVES)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  if (!userId || shelfList.length === 0) {
    return NextResponse.json({ shelves: {} })
  }

  try {
    const results = await Promise.all(
      shelfList.map(async (shelf) => {
        const xml = await fetchShelf(userId, shelf)
        const books: BookData[] = xml ? parseGoodreadsRss(xml, shelf) : []
        return [shelf, books] as const
      }),
    )

    const shelves: Record<string, BookData[]> = {}
    for (const [shelf, books] of results) {
      if (books.length > 0) {
        shelves[shelf] = books
      }
    }

    return NextResponse.json({ shelves })
  } catch {
    return NextResponse.json(
      { shelves: {} },
      { headers: { "Cache-Control": `s-maxage=${ERROR_REVALIDATE_SECONDS}` } },
    )
  }
}
