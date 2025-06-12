import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h2 className="header-logo">Steel Doors</h2>
      <ul className="header-list">
        <li className="header-list-item">Home</li>
        <li className="header-list-item">About</li>
        <li className="header-list-item">Services</li>
        <li className="header-list-item">Blog</li>
        <li className="header-list-item">Contact Us</li>
      </ul>
    </header>
  )
}

export default Header