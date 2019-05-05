export default class ClientManager {
    get(name) {
        const cookies = this.getAll();

        return cookies[name];
    }

    getAll() {
        const pairs = document.cookie.split(';');
        const cookies = {};

        for (let i = 0; i < pairs.length; i++){
            const pair = pairs[i].split('=');
            cookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1]);
        }

        return cookies;
    }

    set(name, value = '', days = 30) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));

        const chunks = [
            `${name}=${value}`,
            `expires=${date.toUTCString()}`,
            'path=/'
        ].join('; ');

        document.cookie = chunks;
    }
}
