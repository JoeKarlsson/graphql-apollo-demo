import React, { Component } from 'react';
import Post from '../components/Post';

class ListPage extends Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.location.key !== nextProps.location.key) {
			this.props.allPostsQuery.refetch();
		}
	}

	render() {
		let blurClass = '';
		if (this.props.location.pathname !== '/') {
			blurClass = ' blur';
		}

		return (
			<div className={'w-100 pa6' + blurClass}>
				<div className="w-100" style={{ maxWidth: 1150 }}>
					{this.props.allPosts &&
						this.props.allPosts.map(post => (
							<Post
								key={post.id}
								post={post}
								refresh={() => this.props.allPostsQuery.refetch()}
							/>
						))}
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default ListPage;
