import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = () => {
	return (
		<Link
			to="/create"
			className="ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline"
		>
			<img src={require('../assets/plus.svg')} alt="" className="plus mb3" />
			<div>New Post</div>
		</Link>
	);
};

export default NewPostButton;
