# react-ssr-use-cookie

Example of working with cookie in universe react applications. Read more [«Работа с куками в универсальных приложениях на react»](https://amorgunov.com/posts/2019-05-04-how-do-work-with-cookies-in-universe-react-apps/) (Article is written on russian yet).

```js
// src/client.jsx

import { CookiesProvider } from './services/cookie';

const jsx = (
    <CookiesProvider>
        <App />
    </CookiesProvider>
);

hydrate(jsx, document.getElementById('mount'));
```

```js
// src/server.jsx

import { CookiesProvider, ServerCookiesManager } from './services/cookie';

const app = express();

app
    .use(cookieParser())
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
```

Component:

```js
export default function CookiesNotification() {
    const [cookie, setCookie] = useCookies(COOKIE_KEY);
    
    if (cookie) {
        return null;
    }

    return	(
        <button	onClick={() => setCookie(true)}>
            Accept use cookie
        </button>
    );
}
```
