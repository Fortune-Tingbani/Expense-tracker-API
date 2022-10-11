const express=require("express")
const dotenv=require("dotenv")
const connectDB =require("./config/connectDB")
const morgan=require("morgan")
const userRoute=require("./routes/userRoute")
const accountRoute=require("./routes/accountRoute")
const cors = require("cors")

const app=express();
dotenv.config();
connectDB();
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"));


//routes
app.use("/api/users", userRoute)
app.use("/api/accounts", accountRoute)




app.get("/", (req, res) => {
    res.send("<h1>Welcome to easeWay Expense Tracker App. Track your expense the easy way</h>")
    })
    
    
    const PORT = process.env.PORT ||9000
    
    app.listen(PORT, () =>
        console.log(`server is running on ${PORT}` )
    )
