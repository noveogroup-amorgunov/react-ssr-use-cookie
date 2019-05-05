// WARNING: use @babel/register only for development
require('@babel/register')();

const app = require('./src/server.jsx').default;
const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log('Application is started on localhost:', port);
});
