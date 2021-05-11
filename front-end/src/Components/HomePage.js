import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import BookCard from './BookCard';

const HomePage = () => {
    const [books, setBooks] = useState([{name:'Da Vinci Code', id:'1'}, {name:'Sapiens', id:'2'}, {name:'Genghis Khan', id:'3'}, {name: 'Les Miserables', id:'4'}, {name:'Notre-Dame de Paris', id:'5'}])
    return (
        <div>
            {books.map(book =>
                <BookCard key={uuid()} book={book} />
            )}
        </div> 
    )
}

export default HomePage;
