import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getBookById } from '../lib/booksApi';

const anger = 'anger.mp3';
const anticipation = 'anticipation.mp3';
const disgust = 'disgust.mp3';
const fear = 'fear.mp3';
const joy = 'joy.mp3';
const negative = 'negative.mp3';
const positive = 'positive.mp3';
const sadness = 'sadness.mp3';
const surprise = 'surprise.mp3';
const trust = 'trust.mp3';

const BookPage = () => {
    const [feeling, setFeeling] = useState(); 
    let soundFile = process.env.PUBLIC_URL + '/Soundtracks/' + feeling;
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
    // const song = await getSongById(id)  Here we should get the song from database
    // const feel = await getFeeling  Here we should get the feeling from DS
    setBookSong(audioElement);
    setFeeling(trust);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div 
                onMouseEnter={() => bookSong.play()}
                onMouseLeave={() => bookSong.pause()}
                >
                    {!loading && book.contents[0].text}
                    {loading && "Loading..."}
            </div>
        </div>
    )
}

export default withRouter(BookPage);
