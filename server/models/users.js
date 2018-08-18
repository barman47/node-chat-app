var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imgPath = '../../public/img';

var UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name field is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    online: {
        type: Boolean
    },
    profilePic: {
        data: Buffer,
        contentyType: String
    },
    messages: {
        type: String
    }
});

module.exports = UserSchema;
