const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bp = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(morgan('combined'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(session({ secret: 'library' }));
debug('hello world');

app.all('/', (req, res, next) => {
    debug('middleware call');
    req.test = 'testing';
    next();
});

app.get('/', (req, res) => {
    console.log(req.test);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
    debug('listening on port 3000');
});
