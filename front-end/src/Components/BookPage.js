import React from "react";
import { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import './BookPage.css';
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
            setLoading(true);
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
            setBookPagesArray(fetchedBook.contents);
            const arr = fetchedBook.contents.map((b) => {
                return b.text;
            });
            const mood = await getParagraphsMood(arr);
            console.log(mood[currentPage - 1]);
                
            if ( mood[currentPage - 1] === "anger") {
                setFeeling(anger);
            }
            if ( mood[currentPage - 1] === "anticipation") {
                setFeeling(anticipation);
            }
            if ( mood[currentPage - 1] === "disgust") {
                setFeeling(disgust);
            }
            if ( mood[currentPage - 1] === "fear") {
                setFeeling(fear);
            }
            if ( mood[currentPage - 1] === "joy") {
                setFeeling(joy);
            }
            if ( mood[currentPage - 1] === "negative") {
                setFeeling(negative);
            }
            if ( mood[currentPage - 1] === "positive") {
                setFeeling(positive);
            }
            if ( mood[currentPage - 1] === "sadness") {
                setFeeling(sadness);
            }
            if ( mood[currentPage - 1] === "surprise") {
                setFeeling(surprise);
            }
            if ( mood[currentPage - 1] === "trust") {
                setFeeling(trust);
            }
            setLoading(false);
        }

        fetchBook(bookId);

    }, [bookId, currentPage]);

const nextPage = () => {
    setCurrentPage(currentPage + 1);
    audioElement.pause();
}

const previousPage = () => {
    setCurrentPage(currentPage - 1);
    audioElement.pause(); 
}

    return (
        <div>
            {loading && "Loading..."}
            {!loading && (
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <div 
                        className="page"
                        onMouseEnter={() => audioElement.play()}
                        onMouseLeave={() => audioElement.pause()}
                        onAuxClick={() => audioElement.pause()}
                    >
                    <div>{bookPagesArray[currentPage - 1].text}</div>
                    </div>
                    {currentPage > 1 && (
                        <button
                            type="button"
                            onClick={previousPage}
                        >
                            Previous
                        </button>
                    )}
                    {currentPage < bookPagesArray.length && (
                        <button
                            type="button"
                            onClick={nextPage}
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
