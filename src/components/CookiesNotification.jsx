import React, { useState } from 'react';
import { useCookies } from '../services/cookie';
import { withCookies } from '../services/cookie';

const COOKIE_KEY = 'notification';

// Example with hoc
function CookiesNotification(props) {
    const { cookies, setCookie } = props;

    if (cookies[COOKIE_KEY]) {
        return null;
    }

    return	(
        <button	onClick={() => setCookie(COOKIE_KEY, true)}>
            Accept use cookie
        </button>
    );
}

export default withCookies(CookiesNotification);

// Example with hooks
// export default function CookiesNotification() {
//     const [cookie, setCookie] = useCookies(COOKIE_KEY);
//     const [read, setRead] = useState(false);
//
//     if (cookie || read) {
//         return null;
//     }
//
//     return	(
//         <button	onClick={() => { setCookie(true); setRead(true); }}>
//             Accept use cookie
//         </button>
//     );
// }
