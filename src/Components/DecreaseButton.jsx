import React from "react";
import "../CSS/DecreaseButton.css";

const DecreaseButton = ({onDecrease}) => {
    return (
        <>
            <button
                className="decrease-btn"
                onClick={onDecrease}
                aria-label="Decrease"
            >
                &#9660;
            </button>
        </>
    );
}

export default DecreaseButton;