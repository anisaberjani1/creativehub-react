import "./Banner.css";
import photo from '../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Do it all with Acrobat.</h1>
        <p className="banner-description">
          Create and edit PDFs. Collaborate with ease. E-sign documents and
          collect signatures. Get everything done in one app, wherever you work.
          Acrobat’s got it.
        </p>
        <button className="banner-btn">Start free trial</button>
      </div>
      <div className="banner-image">
        <img src={photo} alt="photo" width={600}/>
      </div>
    </div>
  );
};

export default Banner;
