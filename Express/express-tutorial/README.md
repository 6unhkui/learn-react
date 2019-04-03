# Express

**기본 라우팅**
<b>app.MATHOD(PATH, HANDLER)</b><br/><br/>

- MATHOD : http 요청 메소드 - get, post, delete, put ...<br/>
- PATH : 라우트 경로<br/>
- HANDLER : 실행될 콜백 함수<br/>

<pre><code><b>main.js</b>
var express = require('express');
var app = express();

app.get('/', function(req, res) { // '/'=루트 경로=index.js에 get 요청이 들어오면 콜백 함수 실행
    res.send('Hello world'); 
});

app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});
</code></pre><br/>

**라우트 모듈화**
<pre><code><b>routes/user.js</b>
var express = require('express');
var router = express.Router();

arouter.get('/:id', function(req, res) { // :id = parameter / 동적인 값을 받아 특정 값을 받으면 함수 실행
    res.send('Receved a GET request, param ' + req.params.id);
});

router.post('/', function(req, res) { 
    res.json({ success : true });
});

router.put('/', function(req, res) {
    res.status(400).json({ message: 'Hey,you. Bad Request!' });
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});

module.exports = router;
</code></pre>

<pre><code><b>main.js</b>에 추가
(...)
var user = require('./routes/user');
app.use('/user', user); // use() :미들웨어를 애플리케이션에 등록
</code></pre><br/>
### middleware
: 요청 오브젝트(req), 응답 오브젝트(res), 그리고 애플리케이션의 요청-응답 주기중 <br/>
그 다음의 미들웨어 함수에 대한 액세스 권한을 갖는 함수 <br/>
http 요청 ----미들웨어----> 라우트 작업<br/>
<------------------------- http 응답<br/>
<br/>

<pre><code>미들웨어 생성 후 추가
<b>main.js</b>
(...)
var myLogger = function(req, res, next) {
    console.log(req.url);
    next();
}

app.use(myLogger);
</code></pre><br/>

**미들웨어 설치**
1) morgan : 로깅 미들웨어<br/>
2) body-parser : JSON 형태 데이터 파싱<br/>
<pre><code><b>main.js</b>
var morgan = require('morgan');
var bodyParser  = require('body-parser');

(...)
app.use(morgan('dev'));
app.use(bodyParser.json());
</code></pre><br/>

<pre><code><b>routes/user.js</b>
(...)
router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success : true,
        user : req.body.username
    });
});
</code></pre><br/>

///<br/>

**Nodemon**
서버 코드 변경시 자동으로 reload해주는 도구
<pre><code>$ yarn add --dev nodemon</code></pre>
<pre><code><b>package.json</b> 추가
  (...)
  "scripts" : {
    "start" : "node src",
    "start:dev" : "nodemon main.js"
  }
</code></pre>
