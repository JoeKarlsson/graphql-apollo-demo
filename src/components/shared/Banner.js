import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className="tc-l mt3 ph3">
			<h2 className="f3 lh-title">
				This is a blog built using GraphQL, React and Apollo.
			</h2>
			<time className="f6 ttu tracked">
				You can check out more at joekarlsson.com
			</time>
			<br />
			<br />
			<Link
				to="/create"
				className="f6 no-underline grow dib v-mid near-black ba b--white ph3 pv2 mb3"
			>
				New Post
			</Link>
		</div>
	);
};

export default Banner;
