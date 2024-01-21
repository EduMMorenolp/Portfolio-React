import React, { useRef } from 'react';
import song from '../sound/TheBluesBrothers-PeterGunnTheme.mp3';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    return (
        <div className="container-audio">
            <audio controls autoplay ref={audioRef} src={song} />
        </div>
    );
};

export default MusicPlayer;
