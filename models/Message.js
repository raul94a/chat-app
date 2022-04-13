const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required:true
    }

}, { timestamps: true })

const Message = model('Message', messageSchema);
exports.Message = Message;

