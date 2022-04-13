const router = require('express').Router();

const messageController = require('../controllers/message-controller');
router.post('/message', messageController.postMessage);




exports.router = router;