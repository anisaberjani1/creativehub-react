import React from "react";

const FooterList = ({ title, items = [] }) => {
  return (
    <ul className="list-none text-sm leading-7 mb-6">
      {title && (
        <li className="text-base font-semibold text-gray-700 mb-2">{title}</li>
      )}
      {items.map((item, index) => (
        <li key={index} className="text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
