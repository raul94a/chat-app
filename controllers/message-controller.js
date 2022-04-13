const jwt = require('jsonwebtoken');
const {Message} = require('../models/Message');

exports.postMessage =  async (req,res,next) => {
    const {content,userEmail} = req.body
    const newMessage = new Message({content: content, userEmail: userEmail})
    await newMessage.save();
    return res.status(200).json({message:content})
}