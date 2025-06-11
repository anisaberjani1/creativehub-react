import "./NewsCard.css";
import CardImage from '../../assets/card.jpg'

const NewsCard = () => {
  return (
    <div className="news-card">
      <img src={CardImage} alt="image" width={400} height={170}/>
      <div className="news-card-content">
      <h3 className="news-card-title">Lorem ipsum dolor sit.</h3>
      <p className="news-card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        minus amet laudantium voluptate doloribus id rerum, minima accusamus
        facere maxime explicabo modi deserunt! Vel, voluptate.
      </p>
      </div>
    </div>
  );
};

export default NewsCard;
