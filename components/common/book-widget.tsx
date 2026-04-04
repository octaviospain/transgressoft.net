"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { BookData } from "@/lib/goodreads"

const SHELF_LABELS: Record<string, string> = {
  "currently-reading": "Currently Reading",
  read: "Recently Read",
  "to-read": "Want to Read",
  "read-software": "Software Books Read",
  "want-to-read-software": "Software Queue",
}

function shelfLabel(shelf: string): string {
  return SHELF_LABELS[shelf] ?? shelf.replaceAll("-", " ").replaceAll(/\b\w/g, (c) => c.toUpperCase())
}

interface BookWidgetProps {
  readonly book: BookData
}

/**
 * Displays a horizontally-laid-out book entry showing the cover image,
 * title, and author. The cover links to the book's Goodreads page;
 * a fallback icon is shown when the cover URL is absent or fails to load.
 */
function BookWidget({ book }: BookWidgetProps) {
  const [imgError, setImgError] = useState(false)

  const showFallback = !book.coverUrl || imgError

  return (
    <div className="flex flex-row items-center gap-3 sm:gap-4 w-[300px] sm:w-[380px]">
      <Link
        href={book.bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${book.title} on Goodreads`}
        className="flex-shrink-0"
      >
        {showFallback ? (
          <div
            className="w-[80px] h-[120px] sm:w-[100px] sm:h-[150px] bg-muted rounded-lg border border-border flex items-center justify-center"
            aria-label="Book cover unavailable"
          >
            <BookOpen size={24} className="text-muted-foreground" />
          </div>
        ) : (
          <Image
            src={book.coverUrl!}
            alt={`Cover of ${book.title} by ${book.author}`}
            width={100}
            height={150}
            className="w-[80px] h-[120px] sm:w-[100px] sm:h-[150px] rounded-lg border border-border shadow-md object-cover hover:opacity-90"
            onError={() => setImgError(true)}
          />
        )}
      </Link>
      <div className="flex flex-col gap-1 justify-center min-w-0">
        <Link
          href={book.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm font-semibold text-foreground hover:underline leading-tight line-clamp-3">
            {book.title}
          </p>
        </Link>
        <p className="text-xs font-normal text-muted-foreground line-clamp-1">{book.author}</p>
      </div>
    </div>
  )
}

const AUTOPLAY_INTERVAL_MS = 8000

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

/**
 * Carousel for books within a single shelf. When only one book is present,
 * renders it directly without navigation controls.
 */
function BookCarousel({ books }: { readonly books: BookData[] }) {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])

  const paginate = useCallback(
    (newDirection: number) => {
      setActiveIndex(([prev]) => {
        const next = (prev + newDirection + books.length) % books.length
        return [next, newDirection]
      })
    },
    [books.length],
  )

  useEffect(() => {
    if (books.length <= 1) return
    const timer = setInterval(() => paginate(1), AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [books.length, paginate])

  if (books.length === 1) {
    return <BookWidget book={books[0]} />
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center gap-2">
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Previous book"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="relative overflow-hidden w-[300px] sm:w-[380px] min-h-[120px] sm:min-h-[150px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BookWidget book={books[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Next book"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex gap-1.5" role="tablist" aria-label="Book carousel indicators">
        {books.map((book, i) => (
          <button
            key={book.bookUrl}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show book ${i + 1}`}
            onClick={() => setActiveIndex([i, i > activeIndex ? 1 : -1])}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === activeIndex ? "bg-foreground" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

interface BookShelfWidgetProps {
  readonly shelves: Record<string, BookData[]>
}

/**
 * Top-level widget that displays shelf tabs and a book carousel for the active shelf.
 * Returns null when no shelves have books. When only one shelf has books,
 * the shelf label is shown without tab navigation.
 */
export function BookShelfWidget({ shelves }: BookShelfWidgetProps) {
  const shelfNames = Object.keys(shelves).filter((s) => shelves[s].length > 0)
  const [activeShelf, setActiveShelf] = useState(shelfNames[0] ?? "")

  if (shelfNames.length === 0) return null

  const singleShelf = shelfNames.length === 1

  return (
    <div className="flex flex-col items-center gap-3">
      {singleShelf ? (
        <span className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
          {shelfLabel(activeShelf)}
        </span>
      ) : (
        <div className="flex gap-2" role="tablist" aria-label="Bookshelf tabs">
          {shelfNames.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={name === activeShelf}
              onClick={() => setActiveShelf(name)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                name === activeShelf
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {shelfLabel(name)}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeShelf}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <BookCarousel books={shelves[activeShelf] ?? []} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/**
 * Animated shimmer placeholder rendered while book data is being fetched.
 * Matches the dimensions and layout of {@link BookWidget}.
 */
export function BookWidgetSkeleton() {
  return (
    <div
      className="flex flex-row items-center gap-3 sm:gap-4 w-[300px] sm:w-[380px] animate-pulse"
      aria-label="Loading current book"
    >
      <div className="w-[80px] h-[120px] sm:w-[100px] sm:h-[150px] rounded-lg bg-muted flex-shrink-0" />
      <div className="flex flex-col gap-2 justify-center min-w-0 flex-1">
        <div className="h-4 w-36 rounded bg-muted" />
        <div className="h-3 w-24 rounded bg-muted" />
      </div>
    </div>
  )
}
