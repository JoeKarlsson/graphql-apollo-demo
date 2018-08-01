import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { CREATE_POST_MUTATION, ALL_POSTS_QUERY } from './graphql'
import CreatePage from './CreatePage'
import Loading from './Loading'

const CreatePageContainer = props => (
  <Query query={ALL_POSTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Error :(</p>

      return (
        <Mutation mutation={CREATE_POST_MUTATION}>
          {createPost => (
            <CreatePage {...data} {...props} createPost={createPost} />
          )}
        </Mutation>
      )
    }}
  </Query>
)

export default CreatePageContainer
