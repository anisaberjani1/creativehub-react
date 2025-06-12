import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-form">
        <h3 className="footer-title">Sign up for our email updates</h3>
        <form action="#" className="footer-form-inputs">
          <input type="text" placeholder='NAME' className='footer-input'/>
          <input type="text" placeholder='EMAIL' className='footer-input'/>
        </form>
      </div>
      <div className="form-contact-info">
        <h3 className="footer-title">Contact</h3>
        <p className="contact-info">
          Steel Doors <br />
          57 Murphy St <br />
          Manchester,MA 01628 <br />
          (500) 005-0505
        </p>
      </div>
      <div className="footer-follow">
        <h3 className="footer-title">Follow Us</h3>
        <h1 className="footer-logo">Steel Doors</h1>
      </div>
    </footer>
  )
}

export default Footer