import React from 'react'
import ReactDOM from 'react-dom'
import ListPageContainer from './components/ListPageContainer'
import CreatePage from './components/CreatePage'
import EditPage from './components/EditPage'
import DetailPage from './components/DetailPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'
import './index.css'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjk6wcces1yvs0129lcwn94v7'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={ListPageContainer} />
        <Route path='/create' component={CreatePage} />
        <Route path='/post/:id' component={DetailPage} />
        <Route path='/post/edit/:id' component={EditPage} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
