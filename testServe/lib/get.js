var User = require('./db');
var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //为了跨域保持session，所以指定地址，不能用*
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/user', function (req, res) {
    User.find(function (err, user) {
        if (err) {
            console.log(err)
        };
        console.log(user);
        res.json(user)
    })
})

app.listen(3030)

