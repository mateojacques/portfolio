import {nav, header} from './navbar.module.css'
import Logo from '../Logo/Logo'

const Navbar = () => {
 return (
  <header className={`${header} container d-flex py-3 align-items-center`}>
   <Logo tag="a" classes="size-md"/>

   <nav className={nav}>
    <ul className="d-flex">
     <li>
      <a href="#about">about me</a>
     </li>
     <li>
      <a href="#projects">projects</a>
     </li>
     <li>
      <a href="#contact">contact</a>
     </li>
    </ul>
   </nav>
  </header>
 )
}

export default Navbar
