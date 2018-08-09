import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
	query AllPostsQuery {
		allPosts(orderBy: createdAt_DESC) {
			id
			imageUrl
			description
		}
	}
`
export const CREATE_POST_MUTATION = gql`
	mutation CreatePostMutation($description: String!, $imageUrl: String!) {
		createPost(description: $description, imageUrl: $imageUrl) {
			id
			description
			imageUrl
		}
	}
`
