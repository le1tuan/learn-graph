import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { 
  ApolloProvider
} from 'react-apollo';
import {
  ApolloClient
} from 'apollo-client';
import {
  HttpLink
} from 'apollo-link-http';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom'

// url
const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});
// initialize apolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
// render 
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider
      client={client}
    >
      <App />
    </ApolloProvider>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
