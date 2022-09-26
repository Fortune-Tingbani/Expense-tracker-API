const mongoose = require("mongoose");
const { string } = require("yup");


const uesrSchema= mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    },
    
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    
    }, { 
        timestamps:true
    }
    );
    
    const User = mongoose.model("user", uesrSchema)
    module.exports = User;