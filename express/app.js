const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));
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
