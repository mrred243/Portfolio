import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component {
	render() {
		const {
			title,
			image,
			description,
			repoURL,
			demoURL,
			id,
			technology,
			test,
		} = this.props.project;
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
						{test ? (
							<p>
								<span style={{ textDecoration: 'underline' }}>
									Default
								</span>{' '}
								: {test}
							</p>
						) : null}

						<p style={{ marginTop: 10 }}>
							<span style={{ textDecoration: 'underline' }}>
								Technology
							</span>{' '}
							: {technology}
						</p>
					</div>
					<div className='portfolio--item--link'>
						{demoURL ? (
							<form action={demoURL} target='_blank'>
								<input
									className='preview--btn'
									type='submit'
									value='Demo'
								/>
							</form>
						) : null}
						{repoURL && Array.isArray(repoURL)
							? repoURL.map((url, i) => {
									const btnValue = `Github ${i + 1}`;
									return (
										<form
											style={
												demoURL
													? { marginLeft: 10 }
													: { marginLeft: 0 }
											}
											key={i}
											action={url}
											target='_blank'>
											<input
												className='preview--btn'
												type='submit'
												value={
													repoURL.length === 1
														? 'Github'
														: btnValue
												}
											/>
										</form>
									);
							  })
							: null}
					</div>
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
					{PROJECTS.map((PROJECT) => {
						return <Project key={PROJECT.id} project={PROJECT} />;
					})}
				</div>
			</div>
		);
	}
}
export default Projects;
