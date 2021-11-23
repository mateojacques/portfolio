import './App.css'
import {
  Navbar,
  Hero,
  Separator,
  About,
  Projects,
  Contact,
  Footer,
} from './components'

function App() {
  return (
    <div className='App'>
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
  )
}

export default App
