const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const chatSchema = new Schema({
    userA: Schema.Types.ObjectId,
    userB: Schema.Types.ObjectId,
    messages:[Schema.Types.ObjectId]
}, {timestamps:true})

const Chat = model('Chat',chatSchema);
exports.Chat = Chat;