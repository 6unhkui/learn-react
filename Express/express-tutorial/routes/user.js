var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) { // :id = parameter / 동적인 값을 받아 특정 값을 받으면 함수 실행
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