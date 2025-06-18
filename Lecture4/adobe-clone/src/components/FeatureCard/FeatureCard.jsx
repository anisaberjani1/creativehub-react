import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({
  subtitle,
  title,
  descriptions = [],
  buttonText,
  contentSections = [],
  extraClasses = "",
}) => {
  return (
    <div className={`feature ${extraClasses}`}>
      {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      {title && <h3 className="card-title">{title}</h3>}
      {descriptions.map((desc, i) => (
        <p className="card-description" key={i}>
          {desc}
        </p>
      ))}
      {buttonText && <button className="card-btn">{buttonText}</button>}

      {contentSections.length > 0 && (
        <div className="card-content">
          {contentSections.map((section, i) => (
            <div key={i}>
              <h3 className="card-content-title">{section.title}</h3>
              {section.items.map((item, j) => (
                <p className="card-content-description" key={j}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
