import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    const { book } = props;
    return (
        <div className='d-flex flex-column m-3 p-3 book-wrapper'>
            <div>
                {book.title}
            </div>
            <Link to={`/book/${book._id}`}>Read the book</Link>
        </div>
    )
}

export default BookCard;