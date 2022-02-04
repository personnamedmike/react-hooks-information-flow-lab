import React from "react";
import App from "./App";

function Header({ onDarkModeClick, isDarkMode }) {
  //   console.log(isDarkMode);
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {(isDarkMode = { onDarkModeClick } ? "Dark" : "Light")} Mode
      </button>
    </header>
  );
}

export default Header;
