import React, {useState, useEffect} from "react";
import TimeUnit from "../Components/TimeUnit.jsx";
import "../CSS/CountdownTimer.css";

const CountdownTimer = ({initialSeconds}) => {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(previous => (previous > 0 ? previous - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTimer = (secs) => {
        const hours = String (Math.floor(secs / 3600)).padStart(2, "0");
        const minutes = String (Math.floor((secs % 3600) / 60)).padStart(2, "0");
        const seconds = String (Math.floor(secs % 60)).padStart(2, "0");
        return {hours, minutes, seconds};
    };

    const {hours, minutes, seconds} = formatTimer(timeLeft);

    return (
        <div className="timer-container">
            <TimeUnit value={hours} />
            <TimeUnit value={minutes} />
            <TimeUnit value={seconds} />
        </div>
    );
}

export default CountdownTimer;