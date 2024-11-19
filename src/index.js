const express = require('express');
const mongoose = require('mongoose');
const homeRouter = require('./routes/home'); // 라우터 경로 확인

const app = express();
const PORT = 3000;

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB 연결 성공'))
    .catch(err => console.error('MongoDB 연결 실패:', err));

// 미들웨어 및 라우터 설정
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('src/public'));
app.use('/', homeRouter); // 라우터 등록

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB 연결 성공'))
    .catch(err => console.error('MongoDB 연결 실패:', err));
