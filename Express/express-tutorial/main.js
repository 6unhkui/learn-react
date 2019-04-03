var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser  = require('body-parser');

/*
@ 기본 라우팅
app.MATHOD(PATH, HANDLER)

MATHOD : http 요청 메소드 - get, post, delete, put ...
PATH : 라우트 경로
HANDLER : 실행될 콜백 함수
*/

/*
@ 미들웨어 생성 후 추가
var myLogger = function(req, res, next) {
    console.log(req.url);
    next();
}

app.use(myLogger);
*/

app.use(morgan('dev'));
app.use(bodyParser.json());

//1과 2의 path는 동일하지만 먼저 실행되는 함수가 우선권을 지님
//1 
app.use('/', express.static('public'));
//2
app.get('/', function(req, res) { // '/'=루트 경로=index.js에 get 요청이 들어오면 콜백 함수 실행
    res.send('Hello world');
});

app.use('/user', user);

app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});
