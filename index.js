const express=require("express")
const dotenv=require("dotenv")
const morgan=require("morgan")
const router=require("./routes/userRoute")


const app=express();
dotenv.config();

app.use(express.json())
app.use(morgan("dev"));





app.get("/", (req, res) => {
    res.send("<h1>Welcome to easeWay Expense Tracker App</h>")
    })
    
    
    const PORT = process.env.PORT ||9000
    
    app.listen(PORT, () =>
        console.log(`server is running on ${PORT}` )
    )
