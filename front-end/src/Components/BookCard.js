import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    const { book } = props;
    return (
        <div className='d-flex flex-column m-3 p-3 book-wrapper'>
            <div className='book-title'>
                {book.title}
            </div>
            <div className='pic-wrapper'>
                <img className='book-pic' src={book.pic} alt="book cover" />
            </div>
            <Link className='card-link text-primary' to={`/book/${book._id}`}>Read the book</Link>
        </div>
    )
}

export default BookCard;