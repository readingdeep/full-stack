import React from 'react';
import ReactPlayer from 'react-player';
import soundFile from '../Soundtracks/theRoots-youGotMe.mp3';
import { useState } from 'react';

/* Link to the library
https://github.com/cookpete/react-player#readme
*/

const Lib2 = () => {

    const [isOnPlay, setIsOnPlay] = useState(false);

    return (
        <div>
            <ReactPlayer
                url={soundFile}
                controls={true}
                // loop
                playing={isOnPlay} 
            />
            <div 
                // onMouseEnter={setIsOnPlay(true)}
                // onMouseLeave={setIsOnPlay(false)}
                
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default Lib2;
