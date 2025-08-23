import React from "react";
import "../CSS/MediaButtons.css";

export const MediaButtons = ({onPLay, onPause, onStop}) => {
    return (
        <>
            <button className="play-btn" onClick={onPLay} aria-label="Play">&#9654;</button>
            <button className="stop-btn" onClick={onStop} aria-label="Stop">&#9632;</button>
            <button className="pause-btn" onClick={onPause} aria-label="Pause">&#9208;</button>
        </>
    );
}