import React, { useEffect } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import { getBooks, searchBooks } from '../lib/booksApi';
import BookCard from './BookCard';
import SearchComponent from './SearchComponent';
import './HomePage.css';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    async function handleOnSearchSubmit(query) {
        setLoading(true);
        if (query.length === 0) {
            const response = await getBooks();
            setBooks(response);
            setLoading(false);
            return;
        }
        const searchQuery = query.toLowerCase();
        const searchResults = await searchBooks(searchQuery);
        setBooks(searchResults);
        setLoading(false);
    }

    useEffect(() => {
        async function fetchBooks() {
            setLoading(true);
            const response = await getBooks();
            setBooks(response);
            setLoading(false);
        }
        fetchBooks();
    }, []);

    return (
        <>
        <SearchComponent onSubmit={(query) => handleOnSearchSubmit(query)}/>
        <div className="books-lib">
            
            {!loading && books.map(book =>
                <BookCard key={uuid()} book={book} />
            )}
            {!loading && books.length === 0 && <div>No Results Found!!</div>}
            {loading && <div>Loading...</div>}
        </div> 
        </>
    )
}

export default HomePage;
