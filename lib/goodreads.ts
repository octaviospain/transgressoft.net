import { XMLParser } from "fast-xml-parser"

/**
 * Represents a book entry retrieved from the Goodreads RSS feed.
 */
export interface BookData {
  title: string
  author: string
  coverUrl: string | null
  bookUrl: string
  shelf: string
  dateAdded: string | null
}

const parser = new XMLParser({
  ignoreAttributes: false,
  isArray: () => false,
})

/**
 * Parses a Goodreads RSS XML response and extracts up to {@code maxItems} book entries.
 *
 * Returns an empty array when the XML is malformed or contains no valid items.
 * Cover URLs containing "nophoto" are treated as absent and returned as `null`.
 */
export function parseGoodreadsRss(
  xml: string,
  shelf: string,
  maxItems = 30,
): BookData[] {
  try {
    const parsed = parser.parse(xml)
    const rawItems = parsed?.rss?.channel?.item

    if (!rawItems) return []

    const itemList = Array.isArray(rawItems) ? rawItems : [rawItems]
    const books: BookData[] = []

    for (const item of itemList) {
      if (books.length >= maxItems) break

      const title = String(item.title ?? "").trim()
      const author = String(item.author_name ?? "").trim()
      const bookUrl = String(item.link ?? "").trim()
      const rawCover = String(item.book_large_image_url ?? "").trim()

      if (!title || !author) continue

      const coverUrl = rawCover && !rawCover.includes("nophoto") ? rawCover : null
      const readAt = String(item.user_read_at ?? "").trim() || null
      const addedAt = String(item.user_date_added ?? "").trim() || null
      const dateAdded = readAt ?? addedAt

      books.push({ title, author, coverUrl, bookUrl, shelf, dateAdded })
    }

    books.sort((a, b) => {
      if (!a.dateAdded && !b.dateAdded) return 0
      if (!a.dateAdded) return 1
      if (!b.dateAdded) return -1
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    })

    return books
  } catch {
    return []
  }
}
