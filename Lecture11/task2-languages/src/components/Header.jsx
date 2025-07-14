import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { text } = useLanguage();
  return <button className="px-4 py-2 border rounded">{text.button}</button>;
};

export default Header;
