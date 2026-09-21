import { Ibook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IBookCardProps {
    book: Ibook,
}

const BookCard = ({book} : IBookCardProps) => {
    return (
         <div
                                       
                                        className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
        
                                        {/* Book Image */}
                                        <div className="relative h-72 bg-gray-100 overflow-hidden">
        
                                            <Image
                                                src={book.image}
                                                alt={book.bookName}
                                                width={500}
                                                height={400}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
        
                                            {/* Category */}
                                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                                                {book.category}
                                            </span>
        
                                            {/* Rating */}
                                            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full">
                                                <span className="text-yellow-400">★</span>
                                                {book.rating}
                                            </div>
        
                                        </div>
        
        
                                        {/* Card Content */}
                                        <div className="p-5">
        
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">
                                                {book.bookName}
                                            </h3>
        
                                            {/* Author */}
                                            <p className="text-sm text-gray-500 mt-1">
                                                by <span className="font-medium text-gray-700">
                                                    {book.author}
                                                </span>
                                            </p>
        
        
                                            {/* Book Info */}
                                            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        
                                                <div>
                                                    <span className="font-semibold text-gray-800">
                                                        {book.totalPages}
                                                    </span>
                                                    <span className="ml-1">
                                                        Pages
                                                    </span>
                                                </div>
        
                                                <span className="text-gray-300">|</span>
        
                                                <div>
                                                    <span className="font-semibold text-gray-800">
                                                        {book.yearOfPublishing}
                                                    </span>
                                                </div>
        
                                            </div>
        
        
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-4">
        
                                                {
                                                    book.tags.map((tag: string) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs font-medium bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))
                                                }
        
                                            </div>
        
        
                                            {/* Bottom */}
                                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        
                                                <span className="text-sm text-gray-500">
                                                    {book.publisher}
                                                </span>
        
                                                <Link href={`/books/${book.bookId}`}>

                                                <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors">
                                                    View Details
                                                </button>
                                                
                                                </Link>
        
                                            </div>
        
                                        </div>
        
                                    </div>
        
    );
};

export default BookCard;