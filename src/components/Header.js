import React, {useState} from 'react';
import drawBlack from '../asset/drawBlack.png';
import an from '../asset/an1.jpeg';


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = ()  => {
        setNavOpen(!navOpen);
        console.log(navOpen);
}



return(
  <div>
  <header>
  <div className="logo">
    <img src={drawBlack} alt="logo" />
  </div>
  <button className={navOpen ? "nav-toggle nav__open" : "nav-toggle"} onClick={() => toggleNav()} aria-lable="toggle navigation">
    <span className={navOpen ? "hamburger nav__open" : "hamburger"}></span>
  </button>
  <nav className={navOpen ? "nav nav__open" : "nav" }>
    <ul className="nav__list">
      <li className="nav__item"><a onClick={toggleNav} href="#intro" className="nav__link">Home</a></li>
      <li className='nav__item'><a onClick={toggleNav} href="#about" className="nav__link">About</a></li>
      <li className='nav__item'><a onClick={toggleNav} href="#project" className="nav__link">Projects</a></li>
      <li className="nav__item"><a onClick={toggleNav} href="#contact" className="nav__link">Contact</a></li>

    </ul>
  </nav>
  </header>
  <div className="intro" id="intro">
      <h1 className="title title--intro">Hi, I am <strong>Thien An Tran</strong></h1>
      <h3 className="subtitle subtitle--intro">A golden-rookie front-end dev from 🇻🇳</h3>
      <img className="img--intro" src={an} alt="" />
  </div>
  </div>
)
}

export default Header;
