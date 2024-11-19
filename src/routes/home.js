const express = require('express');
const User = require('C:\\Users\\nowzero\\web_test\\src\\models\\User.js'); // 모델 경로 확인
const router = express.Router();

// 기본 라우트
router.get('/', (req, res) => {
    res.render('index', { title: '홈페이지' });
});

// 사용자 생성 라우트
router.get('/create-user', async (req, res) => {
    try {
        const user = new User({ name: '홍길동', email: 'hong@example.com', age: 25 });
        await user.save();
        res.send('사용자 생성 완료');
    } catch (err) {
        console.error('사용자 생성 오류:', err);
        res.status(500).send('사용자 생성 중 오류 발생');
    }
});

module.exports = router;
