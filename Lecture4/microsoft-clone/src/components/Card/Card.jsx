import './Card.css'

const Card = ({title,subtitle,btnText}) => {
  return (
    <div className="info-card">
        <div className="card-img"></div>
        <div className="card-content">
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{subtitle}</p>
            <button className="card-btn">{btnText}</button>
        </div>
    </div>
  )
}

export default Card