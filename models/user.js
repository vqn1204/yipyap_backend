var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    username: { type: String, required: true, minlength: 5 },
    password: { type: String, required: true }
});

// TODO: Add user authentication

module.exports = mongoose.model('User', UserSchema);