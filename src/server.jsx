import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import { CookiesProvider, ServerCookiesManager } from './services/cookie';

const app = express();

app
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(render);

function render(req, res) {
    const cookieManager = new ServerCookiesManager(req, res);

    const jsx = (
        <CookiesProvider manager={cookieManager}>
            <App />
        </CookiesProvider>
    );
    const reactDom = renderToString(jsx);

    res.send(htmlTemplate(reactDom));
}


function htmlTemplate(reactDom, reduxState = {}) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
        </head>
        <body>
            <div id="mount">${reactDom}</div>
            <script src="/main.js"></script>
        </body>
        </html>
    `;
}

export default app;
