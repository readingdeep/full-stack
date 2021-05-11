import React from 'react';
import soundFile from '../Soundtracks/theRoots-youGotMe.mp3';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

/* Link to the library
https://www.npmjs.com/package/react-audio-player
*/

const Lib1 = () => {
    const [isPlayed, setIsPlayed] = useState(false);
    
    return (
        <div>
            <ReactAudioPlayer
                src={soundFile}
                controls
                loop={true}
                
                play={isPlayed}
            />
            <div 
                // onMouseEnter={() => .play()}
                // onMouseLeave={() => .pause()}
                
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default Lib1;