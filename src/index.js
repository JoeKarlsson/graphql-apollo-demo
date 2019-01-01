import React from 'react';
import ReactDOM from 'react-dom';
import ListPage from './components/ListPageContainer';
import CreatePage from './components/CreatePageContainer';
import DetailPage from './components/DetailPageContainer';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Banner from './components/shared/Banner';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'tachyons';
import './index.css';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({
	uri: 'https://api.graph.cool/simple/v1/cjk6wcces1yvs0129lcwn94v7',
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ErrorBoundary>
			<div className="flex flex-column min-vh-100 athelas">
				<Router>
					<div>
						<Header />
						<div className="w-100 pr6 pl6">
							<Banner />
							<Route exact path="/" component={ListPage} />
							<Route path="/create" component={CreatePage} />
							<Route path="/post/:id" component={DetailPage} />
						</div>
					</div>
				</Router>
				<Footer />
			</div>
		</ErrorBoundary>
	</ApolloProvider>,
	document.getElementById('root')
);
