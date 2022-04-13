const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})


const User = model('User', userSchema);
exports.User = User;