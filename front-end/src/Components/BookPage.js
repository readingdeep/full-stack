import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundFile from "../Soundtracks/theRoots-youGotMe.mp3";
import { useState, useEffect } from "react";

const BookPage = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const audioElement = new Audio(soundFile);

  return (
    <div>
      <div class="pageButton">
        <i class="fas fa-caret-left"></i>
      </div>
      <div
        onMouseEnter={() => audioElement.play()}
        onMouseLeave={() => audioElement.pause()}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div class="pageButton">
        <i class="fas fa-caret-right"></i>
      </div>
    </div>
  );
};

export default BookPage;
