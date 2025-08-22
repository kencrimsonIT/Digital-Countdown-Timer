import React from "react";
import "../CSS/TimeUnit.css";

const TimeUnit = ({value, separator}) => {
    return (
        <div className="time-unit-container">
            <div className="time-unit-value">{value}</div>
            {separator && <span className="separator">:</span>}
        </div>
    );
}

export default TimeUnit;