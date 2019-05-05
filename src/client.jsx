import React from 'react';
import { hydrate } from 'react-dom';
import 'babel-polyfill';
import App from './components/App';
import { CookiesProvider } from './services/cookie';

const jsx = (
    <CookiesProvider>
        <App />
    </CookiesProvider>
);

hydrate(jsx, document.getElementById('mount'));
