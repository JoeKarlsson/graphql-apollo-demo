import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
	return (
		<article className="pv4 bt bb b--black-10 ph3 ph0-l">
			<div className="flex flex-column flex-row-ns">
				<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
					<Link className="black bg-white" to={`/post/${props.post.id}`}>
						<h1 className="f3 athelas mt0 lh-title">
							Tech Giant Invests Huge Money to Build a Computer Out of Science
						</h1>
					</Link>
					<p className="f5 f4-l lh-copy athelas">{props.post.description}</p>
				</div>
				<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
					<Link className="bg-white" to={`/post/${props.post.id}`}>
						<img
							src={props.post.imageUrl}
							className="db"
							alt="This is a placeholder alt tag"
						/>
					</Link>
				</div>
			</div>
			<p className="f6 lh-copy gray mv0">
				By <span className="ttu">Joe Karlsson</span>
			</p>
			<time className="f6 db gray">Nov. 21, 2016</time>
		</article>
	);
};

export default Post;
