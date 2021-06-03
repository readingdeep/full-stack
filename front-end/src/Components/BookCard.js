import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    return (
        <div className='d-flex flex-column m-3 p-3 book-wrapper'>
            <div>
                {props.book.name}
            </div>
            <Link to={`/book/${props.book.id}`}>Read</Link>
        </div>
    )
}

export default BookCard;