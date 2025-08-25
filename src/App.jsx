import React from "react";
import CountdownTimer from './Components/CountdownTimer.jsx';
import {createGlobalStyle} from "styled-components";
import {MediaButtons} from "./Components/MediaButtons";
import {ThemeController, useTheme} from "./Components/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import ResetButton from "./Components/ResetButton";
import './App.css';
import './theme-variables.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        overflow: hidden;
        font-family: "Orbitron", sans-serif;
        background-color: var(--app-bg, #ffffff);
        color: var(--app-text, #333333);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    #root {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    
    //Light theme
    [data-theme="light"] {
        --app-bg: #ffffff;
        --app-text: #333333;
    }
    
    //Dark theme
    [data-theme="dark"] {
        --app-bg: #1a1a1a;
        --app-text: #ffffff;
    }
`;

const AppContent = () => {
    const {theme} = useTheme();
    const timerRef = React.useRef(null);
    const [isRunning, setIsRunning] = React.useState(false);
    const [isFinished, setIsFinished] = React.useState(false);

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    // Media button handler
    const handlePlay = () => {
        timerRef.current?.start();
        setIsRunning(true);
        setIsFinished(false);
    };

    const handleStop = () => {
        timerRef.current?.stop();
        setIsRunning(false);
        setIsFinished(false);
    };

    const handlePause = () => {
        timerRef.current?.pause();
        setIsRunning(false);
        setIsFinished(false);
    };

    // Reset button handler
    const handleReset = () => {
        timerRef.current?.reset();
        setIsRunning(false);
        setIsFinished(false);
    }

    React.useEffect(() => {
        const checkFinished = () => {
            if (timerRef.current?.isFinished()) {
                setIsFinished(true);
                setIsRunning(false);
            }
        };

        const interval = setInterval(checkFinished, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <GlobalStyle />
            <ThemeToggle />
            <CountdownTimer ref={timerRef} initialSeconds={0} />
            <div className="media-btn-container">
                {(!isRunning && !isFinished) && (
                    <MediaButtons
                        onPlay={handlePlay}
                        onPause={handlePause}
                        onStop={handleStop}
                        isRunning={isRunning}
                    />
                )}
                {(isRunning && !isFinished) && (
                    <MediaButtons
                        onPlay={handlePlay}
                        onPause={handlePause}
                        onStop={handleStop}
                        isRunning={isRunning}
                    />
                )}
                {isFinished && (
                    <ResetButton onReset={handleReset}/>
                )}
            </div>
        </div>
    );
}

function App() {
    return (
        <ThemeController>
            <AppContent />
        </ThemeController>
    );
}

export default App;
