import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from "react";
import TimeUnit from "../Components/TimeUnit.jsx";
import IncreaseButton from "../Components/IncreaseButton.jsx";
import DecreaseButton from "../Components/DecreaseButton.jsx";
import "../CSS/CountdownTimer.css";

const CountdownTimer = forwardRef(({ initialSeconds }, ref) => {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        start() {
            if (timeLeft > 0) {
                setIsRunning(true);
            }
        },
        pause() {
            setIsRunning(false);
        },
        stop() {
            setIsRunning(false);
            setTimeLeft(initialSeconds);
        }
    }));

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(previous => {
                    if (previous <= 1) {
                        setIsRunning(false);
                        return 0;
                    }
                    return previous - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning, timeLeft]);

    const formatTimer = (secs) => {
        const validSecs = Math.max(0, Math.floor(secs || 0));
        const hours = String(Math.floor(validSecs / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((validSecs % 3600) / 60)).padStart(2, "0");
        const seconds = String(Math.floor(validSecs % 60)).padStart(2, "0");
        return { hours, minutes, seconds };
    };

    const hoursIncrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currentHours = Math.floor(validPrev / 3600);
            if (currentHours < 23) {
                return validPrev + 3600;
            }
            return validPrev;
        });
    };

    const hoursDecrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currentHours = Math.floor(validPrev / 3600);
            if (currentHours > 0) {
                return validPrev - 3600;
            }
            return validPrev;
        });
    };

    const minutesIncrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currentMinutes = Math.floor((validPrev % 3600) / 60);
            if (currentMinutes < 59) {
                return validPrev + 60;
            }
            return validPrev;
        });
    };

    const minutesDecrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currentMinutes = Math.floor((validPrev % 3600) / 60);
            if (currentMinutes > 0) {
                return validPrev - 60;
            }
            return validPrev;
        });
    };

    const secondsIncrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currenSeconds = validPrev % 60;
            if (currenSeconds < 59) {
                return validPrev + 1;
            }
            return validPrev;
        });
    };

    const secondsDecrease = () => {
        setIsRunning(false);
        setTimeLeft(prev => {
            const validPrev = Math.max(0, prev || 0);
            const currenSeconds = validPrev % 60;
            if (currenSeconds > 0) {
                return validPrev - 1;
            }
            return validPrev;
        });
    };

    const { hours, minutes, seconds } = formatTimer(timeLeft);

    return (
        <>
            <div className="increase-btn-container">
                <IncreaseButton onIncrease={hoursIncrease} />
                <IncreaseButton onIncrease={minutesIncrease} />
                <IncreaseButton onIncrease={secondsIncrease} />
            </div>

            <div className="timer-container">
                <TimeUnit value={hours} separator />
                <TimeUnit value={minutes} separator />
                <TimeUnit value={seconds} />
            </div>

            <div className="decrease-btn-container">
                <DecreaseButton onDecrease={hoursDecrease} />
                <DecreaseButton onDecrease={minutesDecrease} />
                <DecreaseButton onDecrease={secondsDecrease} />
            </div>
        </>
    );
});

export default CountdownTimer;