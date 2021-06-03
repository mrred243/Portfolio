import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const CoverPage = () => {
	const history = useHistory();

	return (
		<div className='cover'>
			<h1>Welcome to Thien-An's portfolio</h1>
			<h3 style={{ marginBottom: 20 }}>But first, have a nice day.</h3>
			<div>
				<button
					className='intro__btn'
					onClick={() => history.push(`/home`)}>
					<div className='label'>
						<span className='hover-effect'></span>
						<span className='label-text'>
							Continue <span>❯❯❯</span>
						</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default CoverPage;
