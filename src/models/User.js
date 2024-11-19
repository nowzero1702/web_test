const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true }, // 이름은 필수
    email: { type: String, required: true }, // 이메일은 필수
    age: { type: Number } // 나이는 선택
});

module.exports = mongoose.model('User', UserSchema);
