const router = require('express').Router();
const authController = require('../controllers/auth-controller');


router.get('/login')
router.post('/signup', authController.signup);




exports.router = router;