import controller from '../../assets/controller.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-content">
      <div className="banner-content-info">
        <h1 className="b-info-title">Xbox controllers</h1>
        <p className="b-info-description">
          Elite, wireless, adaptive—find the controller that fits your style of play
        </p>
        <button className="b-info-btn">Shop now</button>
      </div>
      <div className="banner-content-img">
        <img src={controller} alt="icons" width={500}/>
      </div>
    </div>
  );
};

export default Banner;
