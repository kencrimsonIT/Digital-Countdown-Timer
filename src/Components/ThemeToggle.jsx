import React from "react";
import {Sun, Moon} from "lucide-react";
import {useTheme} from "./ThemeContext";
import "../CSS/ThemeToggle.css";

const ThemeToggle = () => {
    const {theme, themeToggle} = useTheme();

    return (
        <button
            className='theme-toggle'
            onClick={themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}

export default ThemeToggle;