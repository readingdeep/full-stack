import React, { useEffect } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import BookCard from './BookCard';
import SearchComponent from './SearchComponent';
import Books from "../Books/books.json";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function handleOnSearchSubmit(query) {
        setLoading(true);
        if (query.length === 0) {
            setBooks(Books);
            setLoading(false);
            return;
        }
        const searchQuery = query.toLowerCase();
        const queryArray = [];
        for (const book of Books) {
            const name = book.name.toLowerCase();
            if (name.includes(searchQuery)) {
                queryArray.push(book);
            }
        }
        setBooks(queryArray);
        setLoading(false);
    }

    useEffect(() => {
        setBooks(Books);
    }, [])

    return (
        <div>
            <SearchComponent onSubmit={(query) => handleOnSearchSubmit(query)}/>
            {!loading && books.map(book =>
                <BookCard key={uuid()} book={book} />
            )}
            {books.length === 0 && <div>No Results Found!!</div>}
            {loading && <div>Loading...</div>}
        </div> 
    )
}

export default HomePage;
