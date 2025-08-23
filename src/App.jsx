import React from "react";
import CountdownTimer from './Components/CountdownTimer.jsx';
import {createGlobalStyle} from "styled-components";
import './App.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
    
    body {
        font-family: "Orbitron", sans-serif;
    }
`;

function App() {
  return (
    <div className="timer">
        <GlobalStyle />
        <CountdownTimer initialSeconds={0} />
    </div>
  );
}

export default App;
