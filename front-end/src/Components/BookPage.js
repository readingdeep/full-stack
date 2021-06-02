import React from "react";
import { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { getBookById, getParagraphsMood } from "../lib/booksApi";

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
    const [bookPagesArray, setBookPagesArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);

    const audioElement = new Audio(soundFile);

    useEffect(() => {
        async function fetchBook(bookId) {
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
            setBookPagesArray(fetchedBook.contents);
            const arr = fetchedBook.contents.map((book) => {
                return book.text;
            });
            const mood = await getParagraphsMood(arr);
            console.log(mood);
            setLoading(false);
        }
        fetchBook(bookId);

    }, [bookId]);
    
    const fetchData = async () => {
        const feel = "trust" // get the feeling from DS
        if ( feel === "anger") {
            setFeeling(anger);
        }
        if ( feel === "anticipation") {
            setFeeling(anticipation);
        }
        if ( feel === "disgust") {
            setFeeling(disgust);
        }
        if ( feel === "fear") {
            setFeeling(fear);
        }
        if ( feel === "joy") {
            setFeeling(joy);
        }
        if ( feel === "negative") {
            setFeeling(negative);
        }
        if ( feel === "positive") {
            setFeeling(positive);
        }
        if ( feel === "sadness") {
            setFeeling(sadness);
        }
        if ( feel === "surprise") {
            setFeeling(surprise);
        }
        if ( feel === "trust") {
            setFeeling(trust);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading && "Loading..."}
            {!loading && (
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <div
                        onMouseEnter={() => audioElement.play()}
                        onMouseLeave={() => audioElement.pause()}
                        onAuxClick={() => audioElement.pause()}
                    >
                        {!loading && (
                            <div>{bookPagesArray[currentPage - 1].text}</div>
                        )}
                    </div>
                    {currentPage > 1 && (
                        <button
                            type="button"
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {currentPage < bookPagesArray.length && (
                        <button
                            type="button"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default withRouter(BookPage);
