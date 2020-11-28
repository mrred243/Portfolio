import React, { Component } from 'react'


const About = () => {
    return(
        <div className="about" id="about" >
        <h2 className="title title--about">About me</h2><br/>
        <div className="about--content">
          <div className="img--about"></div>
          <p className="subtitle subtitle--about">Hello, I am <strong>Thien An Tran</strong>, a foreign student from Vietnam. I am studying <strong>Business and Information Technology</strong> at <strong>Haaga-Helia University</strong> in Helsinki, Finland.<br/>
          I am especially interested in <strong>meaningful</strong> and <strong>aesthetic</strong> projects.
          </p>
          <div className="specialty">
            <div className="strength--main">
                <h3 className="specialty--item">Main Strength</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Native</li>
                    <li>Flutter</li>

                </ul>
            </div>
            <div className="strength--other">
                <h3 className="specialty--item">Others</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>Vue</li>
                    <li>MariaDB + MongoDB</li>
                    <li>Spring boot</li>
                    <li>Express</li>
                    <li>WordPress</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
    )
}

export default About;