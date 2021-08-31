const express =require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userContoller');

router.route('/').get(mainController.homePage);

//userRoutes
router.route('/user/create').post(userController.createUser);
router.route('/user/:name').get(userController.getOne);
router.route('/user/update/:id').patch(userController.updateUser);
router.route('/user/signin').get(userController.signIn);
router.route('/user/delete/:id').delete(userController.deleteUser);
module.exports = router;