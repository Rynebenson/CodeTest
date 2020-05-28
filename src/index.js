import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import config from './config';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import './styles/fonts.scss';

const client = new ApolloClient({
  uri: config.graphqlEndpoint
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();