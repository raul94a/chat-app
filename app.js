//config
const database = require('./configuration/database.json');
const network = require('./configuration/network.json')
//routes
const authRoutes = require('./routes/auth-routes')
const messageRouter = require('./routes/message-routes');
//mongoose
const mongoose = require('mongoose');
//cors
const cors  = require('./middleware/cors').cors;
//express
const express = require('express');
const app = express();
//necessary middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors)
//use routes
app.use(authRoutes.router)
app.use(messageRouter.router);



//connection to mongo and server initialization
mongoose.connect(`${database.url}${database.database}`)
    .then(result => {
        const server = app.listen(network.port)
        
    })
    .catch(err => console.log(err))