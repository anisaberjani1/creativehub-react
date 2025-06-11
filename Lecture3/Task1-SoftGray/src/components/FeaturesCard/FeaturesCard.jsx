import './FeaturesCard.css'

const FeaturesCard = ({featureTitle}) => {
  return (
    <div className="feature-card">
      <div className="card-icon"></div>
      <h3 className="card-title">{featureTitle}</h3>
      <p className="card-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
        perspiciatis temporibus repellendus provident. Sit sequi possimus magnam
        vero, architecto in!
      </p>
    </div>
  );
};

export default FeaturesCard;
