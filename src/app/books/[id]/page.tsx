import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import { Ibook } from '@/type/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  // const book = booksData.find((book: Ibook) => book.bookId === Number(id));
  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(id),
  ) as Ibook;
  console.log(book, 'book');
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
        {/* Book Image */}
        <figure className="lg:w-2/5 bg-base-200 p-6">
          <Image
            src={book.image}
            alt={book.bookName}
            width={600}
            height={400}
            className="w-full h-[420px] object-cover rounded-xl shadow-md"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5 p-8">
          {/* Category */}
          <div className="mb-2">
            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            {book.bookName}
          </h2>

          

          {/* Author */}
          <p className="text-lg text-base-content/70">
            by{' '}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          <p>{book.review}</p>

          <div className="divider"></div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="rating rating-sm">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
            </div>

            <span className="font-semibold text-lg">{book.rating}</span>

            <span className="text-base-content/60">/ 5.0</span>
          </div>

          {/* Book Information */}
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <p className="text-sm text-base-content/50">Total Pages</p>
              <p className="font-semibold text-lg">{book.totalPages} pages</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Published</p>
              <p className="font-semibold text-lg">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Publisher</p>
              <p className="font-semibold text-lg">{book.publisher}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Book ID</p>
              <p className="font-semibold text-lg">#{book.bookId}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <p className="text-sm text-base-content/50 mb-2">Tags</p>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="badge badge-secondary badge-outline"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="card-actions justify-end mt-6">
            <ReadButton book={book} />
            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
