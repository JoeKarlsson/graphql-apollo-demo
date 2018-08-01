import React from 'react'
import ListPage from './ListPage'
import { Query } from 'react-apollo'
import { ALL_POSTS_QUERY } from './graphql'

const Loading = () => {
  return (
    <div className='flex w-100 h-100 items-center justify-center pt7'>
      <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
    </div>
  )
}

const ListPageContainer = props => (
  <Query query={ALL_POSTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return `Error! ${error.message}`
      console.log(props)

      return <ListPage {...data} {...props} />
    }}
  </Query>
)

export default ListPageContainer
