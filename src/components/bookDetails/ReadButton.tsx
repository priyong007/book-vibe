"use client";
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book} : {book : Ibook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        console.log('read book btn triger', book);

        setReadBooks([...readBooks, book]);
        toast.success(`you have read "${book.bookName}"`)

    };
    return (
        <div>
            <button className="btn btn-primary px-8" onClick={() => handleReadBook()} >Read</button>
        </div>
    );
};

export default ReadButton;