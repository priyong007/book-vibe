"use client";

import React, { createContext, ReactNode, useState } from "react";
import { Ibook } from "@/type/books.type";

interface IBooksContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <div>
      <BooksContext.Provider value={shareData}>
        {children}
      </BooksContext.Provider>
    </div>
  );
};

export default BooksProvider;