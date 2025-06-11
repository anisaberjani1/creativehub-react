import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header-logo'>SoftGray</h1>
        <ul className='header-list'>
            <li className="header-list-item">Products</li>
            <li className="header-list-item">Services</li>
            <li className="header-list-item">About</li>
            <li className="header-list-item">Jobs</li>
            <li className="header-list-item">Contact</li>
            <li className="header-list-item list-phone">+81-00-0000-0000</li>
        </ul>
    </header>
  )
}

export default Header