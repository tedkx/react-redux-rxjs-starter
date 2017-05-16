const express = require('express'),
    apirouter =    express.Router(),
    auth =      require('./auth'),
    DELAY = 700;

const delay = (req, res, next) => setTimeout(next, DELAY);
const json = (req, res, next) => { res.type('json'); next() };

apirouter.use(function (req, res, next) {
    auth.authenticate(req);

    res.respond = (content, messages, success, status) => {
        if(typeof status === 'number')
            res.status(status);
        res.send({
            success: success === true || messages === void 0 || messages === null,
            messages: typeof messages === 'string' ? [ messages ] : messages,
            content
        });
    }

    next();
});

/* login */
apirouter.post('/login', function(req, res) {
    let user = req.body && req.body.username && req.body.password
        ? dm.findUser(req.body.username, req.body.password)
        : null

    if(user == null)
        return res.status(401).end();

    user.accessToken = auth.generateAccessToken(user);
    res.respond(user);
})

/* ...Routes */
/*
apirouter.get('/dashboard', auth.authorize, delay, json, (req, res) => res.respond({}))
apirouter.post('/dashboard', auth.authorize, delay, json, (req, res) => res.respond({}))
*/

apirouter.all('/*', (req, res) => res.status(404).end())

module.exports = apirouter;