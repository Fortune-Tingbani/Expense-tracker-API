const express=require("express");
const { Register, loginUser, getUsers } = require("../controllers/userController")



const router = express.Router()

router.route("/register").post(Register)
router.route("/login").post(loginUser)
router.route("/users").get(getUsers)



module.exports =router
