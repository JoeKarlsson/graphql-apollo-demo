import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = () => {
	return (
		<Link to="/create">
			<a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">
				New Post
			</a>
		</Link>
	);
};

export default NewPostButton;
