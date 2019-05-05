export default class ServerManager {
    constructor(req, res) {
        this._req = req;
        this._res = res;
    }

    get(name) {
        return this._req.cookies[name];
    }

    getAll() {
        return this._req.cookies;
    }

    set(name, value, days = 30) {
        const maxAge = days*24*60*60*1000;

        this._res.cookie(name, value, { maxAge });
    }
}
