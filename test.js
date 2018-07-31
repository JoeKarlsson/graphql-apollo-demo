import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const ALL_POSTS_QUERY = gql`
	{
		allPosts(orderBy: createdAt_DESC) {
			id
			imageUrl
			description
		}
	}
`

const ListPage = () => (
	<Query query={ALL_POSTS_QUERY}>
		{({ loading, error, data }) => {
			if (loading) return 'Loading...'
			if (error) return `Error! ${error.message}`

			return (
				<div>
					{data.posts.map(post => (
						<Post
							key={post.id}
							post={post}
							refresh={() => this.props.allPostsQuery.refetch()}
						/>
					))}
				</div>
			)
		}}
	</Query>
)
