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

## Example Usage

From the book details page:

- Click "Add to Read Books" to add a book to the read list
- Click "Remove from Read Books" to delete it
- Click "Add to Wishlist" to save a book for later
- Click "Remove from Wishlist" to remove it

## Deployment

This project can be deployed on Vercel or any hosting provider compatible with Next.js.

## License

This project is for educational/demo purposes.

## Author

Book Vibe is a small book tracking application built for learning and personal project use.
