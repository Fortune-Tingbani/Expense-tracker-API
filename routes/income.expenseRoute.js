const express = require ("express");
const { createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount } = require("../controllers/income.expenseController")


const router =express.Router()


router.route("/")
.post(createAccount)