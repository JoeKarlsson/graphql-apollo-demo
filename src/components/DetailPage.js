import React, { Component } from 'react';
import Modal from 'react-modal';
import modalStyle from '../constants/modalStyle';
import { withRouter } from 'react-router-dom';

const detailModalStyle = {
	overlay: modalStyle.overlay,
	content: {
		...modalStyle.content,
		height: 761,
	},
};

class DetailPage extends Component {
	handleDelete = async () => {
		await this.props.deletePost({
			variables: { id: this.props.Post.id },
		});
		this.props.history.replace('/');
	};

	render() {
		const { Post } = this.props;

		return (
			<article className="pa3 pa5-ns">
				<div
					className="close ttu fw6 absolute right-0 top-0 br"
					onClick={this.props.history.goBack}
				>
					<img src={require('../assets/close.svg')} alt="" />
				</div>
				<div
					className="delete ttu white pointer fw6 absolute left-0 top-0 br2"
					onClick={this.handleDelete}
				>
					Delete
				</div>
				<h1 className="f2">Title Text with Image</h1>
				<img
					src={Post.imageUrl}
					className="w-100 f5 measure"
					alt="Photo of outer space"
				/>
				<p className="measure lh-copy">{Post.description}</p>
			</article>
		);
	}
}

export default withRouter(DetailPage);
