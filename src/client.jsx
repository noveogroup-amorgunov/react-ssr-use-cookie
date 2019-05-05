import React from 'react';
import { hydrate } from 'react-dom';
import 'babel-polyfill';
import App from './components/App';

const jsx = (<App />);

hydrate(jsx, document.getElementById('mount'));
