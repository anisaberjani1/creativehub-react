import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-navbar">
        <h3 className="header-logo">Adobe</h3>
        <ul className="header-list">
            <li className="header-list-item">Creativity & Design</li>
            <li className="header-list-item">PDF & E-signatures</li>
            <li className="header-list-item">Marketing & Commerce</li>
            <li className="header-list-item">Learn & Support</li>
        </ul>
        </div>
        <button className='header-btn'>Sign In</button>
    </div>
  )
}

export default Header