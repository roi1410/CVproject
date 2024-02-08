const express = require("express");
const usersController = require("../controller/usersController");
const router = express.Router();

router.route("/signup").post(usersController.createUser);
router.route("/signin").post(usersController.Signin);
router.route("/edit/:id").post(usersController.editUserById)
router.route("/all").get(usersController.getAllUsers);
router.route("/GetByID/:id").get(usersController.getUserById);
router.route("/all").delete(usersController.deleteAllUsers)
router.route("/DeleteByID/:id").delete(usersController.deleteById);
router.route('/authenticate/:id').get(usersController.authenticate);
router.route('/AddCV/:id').post(usersController.AddCV);
router.route('/deleteCVByIndex/:id/:index').delete(usersController.deleteCVByIndex);
router.route('/GetallCV/:id').get(usersController.GetAllCV);

module.exports = router;