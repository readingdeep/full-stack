import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getBookById } from '../lib/booksApi';

let soundFile = process.env.PUBLIC_URL + '/Soundtracks/theRoots-youGotMe.mp3';

const BookPage = () => {
    const params = useParams();
    const { bookId } = params;
    const [book, setBook] = useState();

    const [loading, setLoading] = useState(true);

    const audioElement = new Audio(soundFile);
    const [bookSong, setBookSong] = useState(audioElement);

    useEffect(() => {
        async function fetchBook(bookId) {
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
            setLoading(false);
        }
        fetchBook(bookId);
    }, [bookId])
    
    const fetchData = async () => {
    // const text = await getTextById(id)  Here we should get the text from database
    // const song = await getSongById(id)  Here we should get the song from database
    setBookText(Lorem);
    setBookSong(audioElement);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
