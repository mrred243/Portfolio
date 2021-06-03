import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component {
	render() {
		const { title, image, description, link, id, technology } =
			this.props.project;
		return (
			<div
				className={
					id % 2 == 0 ? 'portfolio--item even' : 'portfolio--item odd'
				}>
				<div
					className='portfolio--img'
					style={{ backgroundImage: `url(${image})` }}></div>

				<div className='portfolio--content'>
					<h3 className='portfolio--title'>{title}</h3>
					<div className='portfolio--text'>
						<p>{description}</p>
						<p style={{ marginTop: 10 }}>
							<span style={{ textDecoration: 'underline' }}>
								Technology
							</span>
							: {technology}
						</p>
					</div>

					<form action={link} target='_blank'>
						<input
							className='preview--btn'
							type='submit'
							value='see this project 🎏'
						/>
					</form>
				</div>
			</div>
		);
	}
}
class Projects extends Component {
	render() {
		return (
			<div className='project' id='project'>
				<h2 className='title title--project'>Featured projects</h2>
				<div className='portfolio'>
					{PROJECTS.map(PROJECT => {
						return <Project key={PROJECT.id} project={PROJECT} />;
					})}
				</div>
			</div>
		);
	}
}
export default Projects;
