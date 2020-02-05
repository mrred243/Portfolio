import React, { Component } from 'react';
import PROJECTS from './data/projects';


class Project extends Component {
  render() {
    const { title, image, description, link } = this.props.project;
    return(
      <div style={{display: 'inline-block', width: 400, margin: 10 }}>
        <a href={link}><h4>{title}</h4>
        <img src= {image} alt='profile' style={{ width: 200, height: 120, margin: '10px 0px 10px 0px'}} /></a>
        <p>{description}</p>
      </div>
    )
  }
}
class Projects extends Component {
  render() {
    return (
      <div>
        <h1 >Highlighted Projects</h1>
        <div>
          {
            PROJECTS.map(PROJECT => {
              return(
                <Project key={PROJECT.id} project={PROJECT} />
              )
            })
          }

        </div>
      </div>
    )
  }
}
export default Projects;
