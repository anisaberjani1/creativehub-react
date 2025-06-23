import React from "react";

const FeatureCard = ({
  subtitle,
  title,
  descriptions = [],
  buttonText,
  contentSections = [],
  extraClasses = "",
}) => {
  return (
    <div className={`rounded-xl p-6 flex flex-col ${extraClasses}`}>
      {subtitle && (
        <h4 className="text-xs uppercase opacity-85 mb-2">{subtitle}</h4>
      )}
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}

      {descriptions.map((desc, i) => (
        <p className="text-sm leading-relaxed mb-4" key={i}>
          {desc}
        </p>
      ))}

      {buttonText && (
        <button
          className={`text-start text-sm underline bg-transparent border-none cursor-pointer ${
            extraClasses.includes("text-black") ? "text-black" : "text-white"
          }`}
        >
          {buttonText}
        </button>
      )}

      {contentSections.length > 0 && (
        <div className="mt-4 space-y-4">
          {contentSections.map((section, i) => (
            <div key={i}>
              <h3 className="font-bold mt-4">{section.title}</h3>
              {section.items.map((item, j) => (
                <p className="text-sm mt-1" key={j}>
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
