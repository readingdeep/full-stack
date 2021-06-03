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
const URL = process.env.PUBLIC_URL + '/Soundtracks/';

const BookPage = () => {
    const [audioElement, setAudioElement] = useState();
    console.log(audioElement);
    const params = useParams();
    const { bookId } = params;
    const [book, setBook] = useState();
    const [bookPagesArray, setBookPagesArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [font, setFont] = useState("pageBig");

    const [loading, setLoading] = useState(true);

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
                setAudioElement(new Audio(URL + anger));
            }
            if ( mood[currentPage - 1] === "anticipation") {
                setAudioElement(new Audio(URL + anticipation));
            }
            if ( mood[currentPage - 1] === "disgust") {
                setAudioElement(new Audio(URL + disgust));
            }
            if ( mood[currentPage - 1] === "fear") {
                setAudioElement(new Audio(URL + fear));
            }
            if ( mood[currentPage - 1] === "joy") {
                setAudioElement(new Audio(URL + joy));
            }
            if ( mood[currentPage - 1] === "negative") {
                setAudioElement(new Audio(URL + negative));
            }
            if ( mood[currentPage - 1] === "positive") {
                setAudioElement(new Audio(URL + positive));
            }
            if ( mood[currentPage - 1] === "sadness") {
                setAudioElement(new Audio(URL + sadness));
            }
            if ( mood[currentPage - 1] === "surprise") {
                setAudioElement(new Audio(URL + surprise));
            }
            if ( mood[currentPage - 1] === "trust") {
                setAudioElement(new Audio(URL + trust));
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

const changeFont = () => {
    if (font === "page") {
    setFont("pageBig")
    } 
    if (font === "pageBig") {
    setFont("page")
    } 
}

    return (
        <div>
            {loading && "Loading..."}
            {!loading && (
                <div>
                    <h1>{book.title}</h1>
                    <em><h2>{book.author}</h2></em>
                    <div
                        type="button"
                        onClick={changeFont}
                    >
                        <u><b>Change font size</b></u>
                    </div>
                    <div className='d-flex flex-row pn'>
                        {currentPage > 1 && (
                                <div className="prev">
                                    <div
                                        className
                                        type="button"
                                        onClick={previousPage}
                                    >
                                        <div className="btn-style">◀︎</div>
                                    </div>
                                </div>
                            )}
                        <div 
                            className={font}
                            onMouseEnter={() => audioElement.play()}
                            onMouseLeave={() => audioElement.pause()}
                            onAuxClick={() => audioElement.pause()}
                        >
                            {!loading &&
                                bookPagesArray[currentPage - 1].text
                            }
                        </div>
                        {currentPage < bookPagesArray.length && (
                            <div
                                className="next"
                                type="button"
                                onClick={nextPage}
                            >
                                <div className="btn-style">▶︎</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default withRouter(BookPage);
