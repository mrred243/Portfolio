import React, { useState } from 'react';
import drawBlack from '../asset/drawBlack.png';
import an from '../asset/an1.jpeg';
import Fade from 'react-reveal/Fade';

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<>
			<header id='home'>
				<div className='logo'>
					<img src={drawBlack} alt='logo' />
				</div>
				<button
					className={navOpen ? 'nav-toggle nav__open' : 'nav-toggle'}
					onClick={() => toggleNav()}
					aria-label='toggle navigation'>
					<span
						className={
							navOpen ? 'hamburger nav__open' : 'hamburger'
						}></span>
				</button>
				<nav className={navOpen ? 'nav nav__open' : 'nav'}>
					<ul className='nav__list'>
						<li className='nav__item'>
							<a onClick={toggleNav} href='#home' className='nav__link'>
								Home
							</a>
						</li>
						<li className='nav__item'>
							<a onClick={toggleNav} href='#about' className='nav__link'>
								About
							</a>
						</li>
						<li className='nav__item'>
							<a
								onClick={toggleNav}
								href='#project'
								className='nav__link'>
								Projects
							</a>
						</li>
						<li className='nav__item'>
							<a
								onClick={toggleNav}
								href='#contact'
								className='nav__link'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<Fade bottom>
				<div className='intro'>
					<h1 className='title--intro'>
						Hi, I am <strong>Thien An Tran</strong>
					</h1>
					<p className='subtitle subtitle--intro'>
						Front-end Dev and Web Designer from 🇻🇳
					</p>
					<img className='img--intro' src={an} alt='' />
				</div>
			</Fade>
		</>
	);
};

export default Header;
