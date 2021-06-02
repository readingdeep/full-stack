import React from "react";
import { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { getBookById } from "../lib/booksApi";

let soundFile = process.env.PUBLIC_URL + "/Soundtracks/theRoots-youGotMe.mp3";

const BookPage = () => {
    const params = useParams();
    const { bookId } = params;
    const [book, setBook] = useState();
    const [bookPagesArray, setBookPagesArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);

    const audioElement = new Audio(soundFile);
    const [bookSong, setBookSong] = useState(audioElement);

    useEffect(() => {
        async function fetchBook(bookId) {
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
            setBookPagesArray(fetchedBook.contents);
            setLoading(false);
        }
        fetchBook(bookId);
    }, [bookId]);

    return (
        <div>
            {loading && "Loading..."}
            {!loading && (
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <div
                        // onMouseEnter={() => audioElement.play()}
                        // onMouseLeave={() => audioElement.pause()}
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
                            onClick={() => {console.log(currentPage); setCurrentPage(currentPage + 1);}}
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
