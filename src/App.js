import "./App.css";
import {
  Navbar,
  Hero,
  Separator,
  About,
  Projects,
  Contact,
  Footer,
} from "./components";
import ColorSwitch from "./components/ColorSwitch/ColorSwitch";

function App() {
  return (
    <div className="App">
      <ColorSwitch />
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
