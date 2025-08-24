import React from "react";
import "../CSS/MediaButtons.css";

export const MediaButtons = ({onPlay, onPause, onStop, isRunning}) => {
    return (
        <>
            {!isRunning && (
                <button className="play-btn" onClick={onPlay} aria-label="Play"></button>
            )}

            {isRunning && (
                <>
                    <button className="stop-btn" onClick={onStop} aria-label="Stop"></button>
                    <button className="pause-btn" onClick={onPause} aria-label="Pause"></button>
                </>
            )}
        </>
    );
}