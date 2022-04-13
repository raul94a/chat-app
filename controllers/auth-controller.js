const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User} = require('../models/User');

exports.signup = async (req,res,next)=>{
    const {email, password} = req.body;
    //Check if user exists
    let user = await User.findOne({email: email});
    if(user){
        res.statusCode = 401;
        return res.json({message:'User exists'});
    }
    const cryptoPass = await bcryptjs.hash(password,12);
    const newUser = new User({
        email: email,
        password: cryptoPass
    })
    
    await newUser.save();
    return res.status(200).json({message: 'User has been registered with exit', email: email});
}