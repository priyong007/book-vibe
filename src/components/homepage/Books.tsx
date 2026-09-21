

import React from 'react';
import BookCard from '@/components/shared/BookCard';
import { Ibook } from '@/type/books.type';

const getBooks = async () => {
    try{

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("error fetching books data", error);
        return [];
    }
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
                    Discover Your Next Book
                </h2>

                <p className="text-gray-500 mt-2">
                    Find your next favorite book from our collection.
                </p>
            </div>


            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    booksData.slice(0,7).map((book : Ibook, index : number) => {

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
