import './FeaturesCard.css'
import img from '../../assets/desktop-icon.png'

const FeaturesCard = ({linkText}) => {
  return (
    <div className='card'>
        <img src={img} alt="icon" width={70} className='card-image'/>
        <a href="http://" className='card-link'>{linkText}</a>
    </div>
  )
}

export default FeaturesCard