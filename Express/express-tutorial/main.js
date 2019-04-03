var express = require('express');
var app = express();
var user = require('./routes/user');

/*
기본 라우팅
app.MATHOD(PATH, HANDLER)

MATHOD : http 요청 메소드 - get, post, delete, put ...
PATH : 라우트 경로
HANDLER : 실행될 콜백 함수
*/

app.get('/', function(req, res) { // '/'=루트 경로=index.js에 get 요청이 들어오면 콜백 함수 실행
    res.send('Hello world'); 
});

app.use('/user', user);

app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});
