const { Router }=require("express");
const { Register, loginUser, getUsers } = require("../controllers/userController")



const router = Router();

router.route("/register").post(Register)
router.route("/login").post(loginUser)
router.route("/").get(getUsers)



module.exports=router



