import React, {useState, createContext, useContext} from "react";

const ThemeContext = createContext();

export const ThemeController = ({children}) => {
    const [theme, setTheme] = useState('light');

    const themeToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    const value = {theme, themeToggle};

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

// ThemeContext's hook
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};