import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import soundFile from '../Soundtracks/theRoots-youGotMe.mp3';
import { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getBookById } from '../lib/booksApi';

const BookPage = () => {
    const params = useParams();
    const { bookId } = params;
    const [book, setBook] = useState();

    const [loading, setLoading] = useState(true);

    const [isPlayed, setIsPlayed] = useState(false);
    const audioElement = new Audio(soundFile);

    useEffect(() => {
        async function fetchBook(bookId) {
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
            setLoading(false);
        }
        fetchBook(bookId);
    }, [])
    
    return (
        <div>
            <div 
                onMouseEnter={() => audioElement.play()}
                onMouseLeave={() => audioElement.pause()}
                >
                    {!loading && book.text}
                    {loading && "Loading..."}
            </div>
        </div>
    )
}

export default withRouter(BookPage);