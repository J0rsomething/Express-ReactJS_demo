var express = require('express');
var app = express();
var router = require('./router');
app.use('/users',router)

app.listen(3001,()=>console.log('Listening at 3001'));
