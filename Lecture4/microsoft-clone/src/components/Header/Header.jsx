import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <ul className="header-list">
            <h1 className="header-logo">Microsoft</h1>
            <li className="header-list-item">Microsoft 365</li>
            <li className="header-list-item">Teams</li>
            <li className="header-list-item">Copilot</li>
            <li className="header-list-item">Windows</li>
            <li className="header-list-item">Surface</li>
            <li className="header-list-item">Xbox</li>
            <li className="header-list-item">Deals</li>
            <li className="header-list-item">Small Business</li>
            <li className="header-list-item">Support</li>
        </ul>
        <ul className="header-list">
            <li className="header-list-item">All Microsoft</li>
            <li className="header-list-item">Search</li>
            <li className="header-list-item">Cart</li>
            <li className="header-list-item">Sign in</li>
        </ul>
    </div>
  )
}

export default Header