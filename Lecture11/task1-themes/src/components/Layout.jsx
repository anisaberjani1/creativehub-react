import React from 'react'
import Header from './Header'

const Layout = ({theme, toggleTheme}) => {
  return (
    <div className='p-8'>
        <Header theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Layout