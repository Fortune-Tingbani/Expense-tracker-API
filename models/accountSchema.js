
const mongoose = require("mongoose");
const { string } = require("yup");


const accountSchema= mongoose.Schema({

    income: {
        type: Number,
        require: true,
    },
    note: {
        type: String,
        require: true,
    },
    
},{
    timestamps:true
})

const Account = mongoose.model("Account", accountSchema)
module.exports = Account;

