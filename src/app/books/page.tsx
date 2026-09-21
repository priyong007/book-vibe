import React from 'react';
import BookCard from '@/components/shared/BookCard';
import { Ibook } from '@/type/books.type';

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};

const Books = async () => {

    const booksData = await getBooks();

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Section Title */}
            <div className="mb-8">
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                    Explore Books
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Discover Your All Book
                </h2>

                <p className="text-gray-500 mt-2">
                    Find your next favorite book from our collection.
                </p>
            </div>


            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    booksData.map((book : Ibook, index : number) => {

                        return (
                            <BookCard key={index} book={book}/>
                        );
                    })
                }

            </div>

        </section>
    );
};

export default Books;