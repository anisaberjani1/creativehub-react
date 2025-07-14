import React from 'react'

const ThemeButton = ({theme, toggleTheme}) => {
  return (
    <button onClick={toggleTheme} className='px-4 py-2 border rounded'>
        Switch to {theme === 'light'? 'Dark': 'Light'} mode
    </button>
  )
}

export default ThemeButton