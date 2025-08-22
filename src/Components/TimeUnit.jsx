import React from "react";
import "../CSS/TimeUnit.css";

const TimeUnit = ({value}) => {
    return (
        <div className="time-unit-container">
            <div className="time-unit-value">{value}</div>
        </div>
    );
}

export default TimeUnit;