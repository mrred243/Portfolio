import React, { Component } from 'react'


const About = () => {
    return(
        <div className="about" id="about" >
        <h2 className="title title--about">My specialty</h2>
        <div className="about--content">
          <div className="img--about"></div>
          <div className="subtitle subtitle--about">
            <h3 className="about--headline">Front-end and Mobile Development</h3>
            <p>
                I build responsive websites and mobile apps with optimal user experience that achieves your business goals.
            </p>
            <h3 className="about--headline">Design</h3>
            <p>
                I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.
            </p>
            <h3 className="about--headline">Webflow Development</h3>
            <p>
                I build websites in Webflow where I can create responsive, powerful and fully custom websites. Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.
            </p>
          </div>
        </div>
        <div className="specialty">
            <div className="strength--main">
                <h3 className="specialty--title">Main Strengths</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Webflow</li>
                    <li>Figma</li>
                    <li>Redux</li>
                    <li>Flutter</li>
                </ul>
            </div>
            <div className="strength--other">
                <h3 className="specialty--title">Others</h3>
                <ul>
                    <li>HTML, CSS</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>MariaDB</li>
                    <li>Springboot</li>
                    <li>Express</li>
                    <li>WordPress</li>
                </ul>
            </div>
          </div>
        </div>
    )
}

export default About;