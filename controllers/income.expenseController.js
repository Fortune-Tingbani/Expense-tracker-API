const Account=require("../models/income.expenseSchema")



const createAccount= async (req, res) => {
    const newAccount = new Account({
        amount: req.body.amount,
        note:req.body.note,
    })
    await newAccount.save()
    res.status(201).json(newAccount);
};


// get all accounts
const getAllAccounts= async(req, res) => {
    const accounts=await Account.find();
    res.json(accounts);
}

//get a single account
const getSingleAccount= async(req, res)=> {
    const account = await Account.findById(req.params._id)
    res.json(account);
};

// update an account
const updateAccount= async(req, res)=> {
    const foundAccount= await Account.findById(req.params._id)
    if(foundAccount) {
        foundAccount.amount=req.body.amount,
        foundAccount.note=req.body.note


        const updateAccount= await foundAccount.save();
        res.json({updateAccount})

    }
}

//delete an account
const deleteAccount = async (req, res)=>{
    const foundAccount = await Account.findById(req.params._id)
    if(foundAccount) {
        foundAccount.remove()
        res.json({msg: "Account removed"})
    }else {
        res.status(404).json({error: "Account not found"})
    }
}
module.exports= {createAccount, getAllAccounts, getSingleAccount, updateAccount, deleteAccount}