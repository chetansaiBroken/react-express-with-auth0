const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');

const app = express();
app.use(cors());
var verifyJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-vcj3qpjh.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'this is unique identifier',
    issuer: 'https://dev-vcj3qpjh.us.auth0.com/',
    algorithms: ['RS256']
}).unless({ path: ['/'] });

app.use(verifyJwt);

app.get('/', (req, res) => {
    res.send('this is not protected route');
})

//app.use(verifyJwt);
app.get('/protected', (req, res) => {
    res.send('this is protected dude!');
})
app.listen(4000, () => console.log('server has started'));