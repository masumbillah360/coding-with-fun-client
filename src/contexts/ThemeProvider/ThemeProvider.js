import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false);
    const themeInfo = {dark, setDark}
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;