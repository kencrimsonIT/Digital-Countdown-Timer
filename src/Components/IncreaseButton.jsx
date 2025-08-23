import React from "react";
import "../CSS/IncreaseButton.css";

const IncreaseButton = ({onIncrease}) => {
    return (
        <>
            <button
                className="increase-btn"
                onClick={onIncrease}
                aria-label="Increase"
            >
                &#9650;
            </button>
        </>
    );
}

export default IncreaseButton;