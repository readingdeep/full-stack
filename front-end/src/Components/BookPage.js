import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useState, useEffect } from 'react';
import {useParams } from "react-router-dom";
let soundFile = process.env.PUBLIC_URL + '/Soundtracks/theRoots-youGotMe.mp3';
const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const BookPage = () => {
    let id = useParams();
    console.log(id)
    const audioElement = new Audio(soundFile);
    const [isPlayed, setIsPlayed] = useState(false);
    const [bookText, setBookText] = useState(Lorem);
    const [bookSong, setBookSong] = useState(audioElement);
    
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
                onMouseEnter={() => bookSong.play()}
                onMouseLeave={() => bookSong.pause()}
                
                >
                {bookText && bookText}
            </div>
        </div>
    )
}

export default BookPage;