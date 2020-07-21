import React, { Component } from 'react';
import PROJECTS from './data/projects';


class Project extends Component {
  render() {
    const { title, image, description, link, id, technology } = this.props.project;
    return(

        <div className={ id % 2 == 0 ? "portfolio--item even" : "portfolio--item odd" }>

          <div className="img--portfolio">
              <img src={image} style={{ opacity: 0.7, maxHeight: '100%' }} />
          </div>

          <div className="content--portfolio">
              <h3 className="title--portfolio">{title}</h3>
              <p>{description}<br/>
                  <strong>Technology:  </strong>{technology}
              </p>
              <form action={link}>
                  <input className="preview--btn" type="submit" value="Preview 🎏" />
              </form>
          </div>

        </div>

    )
  }
}
class Projects extends Component {
  render() {
    return (
      <div className="project" id="project">
        <h2 className="title title--project">Featured Projects</h2>
        <div className="portfolio">
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
