import { THEME_COLORS } from "./constants";

export const randomizeThemeColor = () => {
  const randomIndex = Math.floor(Math.random() * THEME_COLORS.length);
  const randomColor = THEME_COLORS[randomIndex];

  document.documentElement.style.setProperty("--accent-values", randomColor);
};
