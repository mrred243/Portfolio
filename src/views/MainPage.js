import React, { Component } from 'react';


import Header from '../components/Header';
import Projects from '../components/Projects';
import SocialProfiles from '../components/SocialProfiles';
import About from '../components/About';

import Fade from 'react-reveal/Fade';

const MainPage = () => {
    
    return (
        <Fade bottom>
          <div>
            <Header />
            <hr />
            <About />
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
          </div>
        </Fade>
    )
}

export default MainPage;