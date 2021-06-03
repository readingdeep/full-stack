import React, { useEffect } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import { getBooks } from '../lib/booksApi';
import BookCard from './BookCard';
import './HomePage.css';
import deapLogo from '../Images/deapLogo.png';

const HomePage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const response = await getBooks();
            setBooks(response);
        }
        fetchBooks();
    }, []);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <p className='h4 text-primary welcome'>Welcome to</p>
                <img src={deapLogo} alt='logo' className='logo'></img>
            </div>
            <div className="books-lib">
                {books.map(book =>
                    <BookCard key={uuid()} book={book} />
                )}
            </div> 
        </>
    )
}

export default HomePage;
