import "./Info.css";
import infoImage from '../../assets/info.png'

const Info = () => {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="info-content-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <h1 className="content-text-title">Lorem Ipsum</h1>
          <p className="content-text-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            eligendi sequi est minus dolorum quas officia illo nemo delectus
            nobis!
          </p>
          <button className="info-button">View More</button>
        </div>
        <div className="info-image">
          <img src={infoImage} alt="photo" width={450}/>
        </div>
      </div>
      <div className="info-images">
          <div className="image-box">
            <p className="image-paragraph">Lorem ipsum dolor sit.</p>
            <h3 className="image-title">THE NEWS</h3>
          </div> 
          <div className="image-box">
            <p className="image-paragraph">Lorem ipsum dolor sit.</p>
            <h3 className="image-title">LIBRO</h3></div> 
          <div className="image-box box3">
            <p className="image-paragraph">Lorem ipsum dolor sit.</p>
            <h3 className="image-title">ELITE</h3>
          </div> 
      </div>
    </div>
  );
};

export default Info;
