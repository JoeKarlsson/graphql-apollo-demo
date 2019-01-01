import React from 'react';

const Banner = () => {
	return (
		<div className="bg-black-80 pb3 pt20">
			<div className="tc-l mt2 ph3">
				<h1 className="f2 f1-l fw2 white-90 lh-title ta-center">
					This is a blog built using GraphQL, React and Apollo.
				</h1>
				<h2 className="fw1 f3 white-80 mt3 mb1">
					You can check out more at joekarlsson.com
				</h2>
			</div>
		</div>
	);
};

export default Banner;
