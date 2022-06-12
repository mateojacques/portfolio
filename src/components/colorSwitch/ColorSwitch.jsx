import React, { useState, useEffect } from "react";
import { container, colorSwitch } from "./colorSwitch.module.css";

const root = document.documentElement;

const ColorSwitch = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const handleSwitchPalette = () => {
    setDarkModeEnabled(!darkModeEnabled);

    const switchBtn = document.getElementById("switchBtn");

    if (darkModeEnabled) {
      // Set css variables
      root.style.setProperty("--primary", "#111");
      root.style.setProperty("--secondary", "#fff");
      root.style.setProperty("--muted", "#222");

      // Set switch button
      switchBtn.style.transform = "translateX(25px)";

      //Set local storage
      localStorage.setItem("darkMode", true);
    } else {
      // Set css variables
      root.style.setProperty("--primary", "#fff");
      root.style.setProperty("--secondary", "#111");
      root.style.setProperty("--muted", "#ececec");

      // Set switch button
      switchBtn.style.transform = "translateX(0px)";

      //Set local storage
      localStorage.setItem("darkMode", false);
    }
  };

  useEffect(() => {
    handleSwitchPalette();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={container}>
      <button
        id="switchBtn"
        className={colorSwitch}
        onClick={() => handleSwitchPalette(!darkModeEnabled)}
      ></button>
    </div>
  );
};

export default ColorSwitch;
