import React, { useState, useContext } from "react";
import ThemeContext from '../context/ThemeContext.js'
import "../assets/Header.scss";

const Header = () => {
  const [mode, setMode] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClickTheme = () => {
    setMode(!mode);
    (theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode"));
  };

  return (
    <div className="Header">
      <h1>REACTHOOKS</h1>
      <button
        type="button"
        onClick={handleClickTheme}
        className={"btn " + (mode ? "btn--light" : "btn--dark")}
      >
        {mode ? "Go to Light - Mode" : "Go to Dark - Mode"}
      </button>
    </div>
  );
};

export default Header;
