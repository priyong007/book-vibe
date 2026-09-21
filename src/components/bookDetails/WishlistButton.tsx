"use client";
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book} : {book : Ibook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext);

    const handleWishlist = () => {
        console.log('read book btn triger', book);

        setWishlist([...wishlist, book]);
        toast.success(`you added wishlist "${book.bookName}"`)

    };
    return (
        <div>
            <button className="btn btn-primary px-8" onClick={() => handleWishlist()} >Add to Wishlist</button>
        </div>
    );
};

export default WishlistButton;


