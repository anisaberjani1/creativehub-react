import "./MainContent.css";
import Map from "../../assets/map.jpg";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="form-content">
        <h2 className="form-title">
          Interested in a qoute.Or have a question? <br /> Please use the
          contact form below
        </h2>
        <p className="form-info">We guarantee a response within 24 hours.</p>
        <form action="#" className="main-form">
          <div className="form-name-input">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="form-input form-name"
            />
            <input type="text" placeholder="LAST NAME" className="form-input form-name" />
          </div>
          <input type="email" placeholder="EMAIL" className="form-input" />
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="form-input"
          />
          <input
            type="text"
            placeholder="COMPANY NAME"
            className="form-input"
          />
          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE"
            className="form-input"
            rows={10}
          ></textarea>
          <button type="submit" className="form-btn">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="info-content">
        <img src={Map} alt="map" width={450} />
        <h4 className="info-title">Hours of operation</h4>
        <p className="info-description">
          Monday-Friday <br /> 8am - 4:30pm
        </p>
        <h4 className="info-title">Get in Touch</h4>
        <p className="info-description">
          (508) 005-0505 <br /> info@steeldoors.com
        </p>
        <h4 className="info-title">Follow us</h4>
      </div>
    </div>
  );
};

export default MainContent;
