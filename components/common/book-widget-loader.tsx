"use client"

import { useEffect, useState } from "react"

import { BookData } from "@/lib/goodreads"
import { BookShelfWidget, BookWidgetSkeleton } from "@/components/common/book-widget"

/**
 * Client-side data fetcher that retrieves books grouped by shelf from the
 * {@code /api/books} route and delegates rendering to {@link BookShelfWidget}.
 *
 * Displays a skeleton placeholder while the request is in flight.
 * Renders nothing when the API returns empty shelves or the fetch fails.
 */
export function BookWidgetLoader() {
  const [shelves, setShelves] = useState<Record<string, BookData[]>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setShelves(data.shelves ?? {})
      })
      .catch(() => {
        setShelves({})
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <BookWidgetSkeleton />
  return <BookShelfWidget shelves={shelves} />
}
