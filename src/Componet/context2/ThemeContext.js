import { createContext, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider({ children}) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(preTheme => preTheme === 'light' ? 'dark' : 'light')
  }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    ) 
}
