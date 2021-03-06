/*eslint-env browser*/
// Generic react client app, generated by create-react-app, that starts App.js

// node imports
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';

// local imports
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';

import 'carbon-components/css/carbon-components.css'
import 'carbon-addons-cloud/css/styles.css'
import '@ibm/plex/css/ibm-plex.css'

const client = new ApolloClient({
    link: createUploadLink(),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// We are not using service workers, so manually force an unregister.
unregister()