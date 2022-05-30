import React, { useState, useEffect } from "react";
import { container, colorSwitch } from "./ColorSwitch.module.css";

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
    } else {
      // Set css variables
      root.style.setProperty("--primary", "#fff");
      root.style.setProperty("--secondary", "#111");
      root.style.setProperty("--muted", "#ececec");

      // Set switch button
      switchBtn.style.transform = "translateX(0px)";
    }
  };

  useEffect(() => {
    let darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (darkModePreference) setDarkModeEnabled(true);
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
