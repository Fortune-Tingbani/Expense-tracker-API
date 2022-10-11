const { Router } = require ("express");
const { createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount } = require("../controllers/accountController")


const router =Router()


router.route("/").post(createAccount).get(getAllAccounts)
router.route("/:_id").get(getSingleAccount).put(updateAccount).delete(deleteAccount)



module.exports=router