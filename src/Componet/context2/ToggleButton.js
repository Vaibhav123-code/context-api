import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function ToggleButton() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <button onClick={toggleTheme}  className={theme}>
           Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    </div>
  )
}

export default ToggleButton