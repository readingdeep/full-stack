import React, { useEffect } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import { getBooks } from '../lib/booksApi';
import BookCard from './BookCard';

const HomePage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const books = await getBooks();
            setBooks(books);
        }
        fetchBooks();
    }, []);

    return (
        <div>
            {books.map(book =>
                <BookCard key={uuid()} book={book} />
            )}
        </div> 
    )
}

export default HomePage;
