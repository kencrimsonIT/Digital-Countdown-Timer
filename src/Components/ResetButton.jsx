import React from "react";
import {RotateCw} from "lucide-react";
import "../CSS/ResetButton.css";

const ResetButton = ({onReset}) => {
    return (
        <button className="reset-btn" onClick={onReset} aria-label="Reset Timer">
            <RotateCw size={20} />
        </button>
    );
}

export default ResetButton;