import './FindMore.css'
import minecraft from '../../assets/minecraft.png'

const FindMore = () => {
  return (
    <div className="findMore-content">
          <div className="findMore-content-info">
            <h1 className="f-info-title">Preserving St. Peter's Basilica with Minecraft</h1>
            <p className="f-info-description">
              See how Peter is here, a Minecraft Education game, helps students learn the importance of cultural heritage.
            </p>
            <button className="b-info-btn">Find out more</button>
          </div>
          <div className="findMore-content-img">
            <img src={minecraft} alt="icons" width={500}/>
          </div>
        </div>
  )
}

export default FindMore