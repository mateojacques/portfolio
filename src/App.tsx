import { useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";
import { randomizeThemeColor } from "./utils/helpers";

function App() {
  useEffect(() => {
    randomizeThemeColor();
  }, []);

  return (
    <>
      <Background />

      <Outlet />
    </>
  );
}

export default App;
