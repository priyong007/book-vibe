# Book Vibe

Book Vibe is a modern book collection and reading tracker built with Next.js. Users can browse books, view detailed information, add books to a reading list or wishlist, and remove them anytime.

## Features

- Browse a curated book catalog
- View detailed book information
- Add books to Read Books
- Add books to Wishlist
- Remove books from either collection
- Sort listed books by rating, page count, or publishing year
- Reading analytics chart for books marked as read
- Responsive UI using Tailwind CSS and DaisyUI

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- Recharts
- react-toastify

## Project Structure

```bash
src/
├── app/
│   ├── books/
│   ├── listed-books/
│   ├── read-book/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── bookDetails/
│   ├── homepage/
│   └── shared/
├── context/
│   └── BooksContext.tsx
├── type/
│   └── books.type.ts
└── assets/
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Collection Functionality

The app uses a React context-based state management system to store:

- `readBooks`
- `wishlist`

These collections support:

- Add to collection
- Remove from collection
- Duplicate prevention
- Conditional button states

### Collection state and helper functions

Use the existing collection state in `BooksContext` and add helper functions for add/remove actions. This keeps the logic central and works cleanly with the book detail buttons.

```tsx
"use client";

import React, { createContext, ReactNode, useState } from "react";
import { Ibook } from "@/type/books.type";

type CollectionType = "readBooks" | "wishlist";

interface IBooksContext {
  readBooks: Ibook[];
  wishlist: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
  addBookToCollection: (book: Ibook, type: CollectionType) => void;
  removeBookFromCollection: (bookId: number, type: CollectionType) => void;
  isBookInCollection: (bookId: number, type: CollectionType) => boolean;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  wishlist: [],
  setReadBooks: () => {},
  setWishlist: () => {},
  addBookToCollection: () => {},
  removeBookFromCollection: () => {},
  isBookInCollection: () => false,
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);

  const addBookToCollection = (book: Ibook, type: CollectionType) => {
    if (type === "readBooks") {
      setReadBooks((prev) =>
        prev.some((item) => item.bookId === book.bookId)
          ? prev
          : [...prev, book]
      );
      return;
    }

    setWishlist((prev) =>
      prev.some((item) => item.bookId === book.bookId)
        ? prev
        : [...prev, book]
    );
  };

  const removeBookFromCollection = (bookId: number, type: CollectionType) => {
    if (type === "readBooks") {
      setReadBooks((prev) => prev.filter((item) => item.bookId !== bookId));
      return;
    }

    setWishlist((prev) => prev.filter((item) => item.bookId !== bookId));
  };

  const isBookInCollection = (bookId: number, type: CollectionType) => {
    if (type === "readBooks") {
      return readBooks.some((book) => book.bookId === bookId);
    }

    return wishlist.some((book) => book.bookId === bookId);
  };

  const shareData = {
    readBooks,
    wishlist,
    setReadBooks,
    setWishlist,
    addBookToCollection,
    removeBookFromCollection,
    isBookInCollection,
  };

  return (
    <BooksContext.Provider value={shareData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
```

### Example: Read button toggle

```tsx
"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, addBookToCollection, removeBookFromCollection } =
    useContext(BooksContext);

  const exists = readBooks.some((item) => item.bookId === book.bookId);

  const handleToggleRead = () => {
    if (exists) {
      removeBookFromCollection(book.bookId, "readBooks");
      return;
    }

    addBookToCollection(book, "readBooks");
  };

  return (
    <button
      onClick={handleToggleRead}
      className={`btn ${exists ? "btn-error" : "btn-success"}`}
    >
      {exists ? "Remove from Read Books" : "Add to Read Books"}
    </button>
  );
};

export default ReadButton;
```

### Example: Wishlist button toggle

```tsx
"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";

const WishlistButton = ({ book }: { book: Ibook }) => {
  const { wishlist, addBookToCollection, removeBookFromCollection } =
    useContext(BooksContext);

  const exists = wishlist.some((item) => item.bookId === book.bookId);

  const handleToggleWishlist = () => {
    if (exists) {
      removeBookFromCollection(book.bookId, "wishlist");
      return;
    }

    addBookToCollection(book, "wishlist");
  };

  return (
    <button
      onClick={handleToggleWishlist}
      className={`btn ${exists ? "btn-warning" : "btn-outline btn-warning"}`}
    >
      {exists ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
```

This gives you the full add/remove collection flow in TypeScript:

- Add book to collection
- Remove from collection
- Prevent duplicates
- Toggle button label based on current state

## Deployment

This project can be deployed on Vercel or any hosting provider compatible with Next.js.

## License

This project is for educational/demo purposes.

## Author

Book Vibe is a small book tracking application built for learning and personal project use.
