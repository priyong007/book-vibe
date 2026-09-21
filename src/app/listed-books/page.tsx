'use client';
import BookCard from '@/components/shared/BookCard';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/type/books.type';
import React, { useContext, useState } from 'react';

const ListedPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log(readBooks, wishlist, 'readBooks', 'wishlist');
  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating');
  console.log(sortBy, 'sortBy')

    const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

    const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  console.log(sortedReadBooks, "sortedReadBooks");
  console.log(sortedWishlist, "sortedWishlist");

  return (
    <div className="max-w-7xl mx-auto py-[20px]">
      <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>

      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as 'rating' | 'pages' | 'year')
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={'rating'}>Rating</option>
          <option value={'pages'}>Number of Pages</option>
          <option value={'year'}>Publisher Year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: Ibook) => {
              return <BookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              {' '}
              No Read Book found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: Ibook) => {
              return <BookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              {' '}
              No wishlist found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedPage;
