import './Hero.css'
import microsoft from '../../assets/microsoft-icons.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="navbar">
            Trade in and you could get cash back. Learn more
        </div>
        <div className="hero-content">
            <div className="hero-content-info">
                <h1 className="info-title">Achieve the extraordinary</h1>
                <p className="info-description">Microsfot 365 delivers cloud storage, security, and Microsoft Copilot <br /> in your favorite apps—all in one plan.</p>
                <button className="info-btn">Shop Microsoft 365</button>
            </div>
            <div className="hero-content-img">
                <img src={microsoft} alt="icons" width={700} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default Hero