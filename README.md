### Book Collection Management

Implemented book collection management using the existing state in `BooksContext` with TypeScript.

- **Add to Collection:** Add books to the user's collection.
- **Remove from Collection:** Remove books from the collection.
- **Prevent Duplicates:** Ensure the same book cannot be added more than once.
- **Dynamic Button Label:** Toggle the button label between **"Add to Collection"** and **"Remove from Collection"** based on the book's current collection status.
- **Centralized State Management:** Keep add/remove logic in `BooksContext` for consistent state handling across book detail components.
