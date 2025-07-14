import React from 'react'
import ThemeButton from './ThemeButton'

const Header = ({theme, toggleTheme}) => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>My Theme App</h1>
        <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Header