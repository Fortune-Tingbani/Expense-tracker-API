const User=require ("../models/userSchema")
const bcrypt = require("bcrypt")
const {validateRegister}=require("../config/Validator")
const generateToken=require("../utils/generateToken")



// adding a user
// const Register = async (req, res) => {
//     const {username, email, password } =req.body;
//     const valid = await validate({username, email, password});
//     if (valid) {

//         const hashedPassword = await bcrypt.hash(valid.password, 8)
//         const savedUser = await User.create({
//            username,
//            email,
//            password:hashedPassword, 
//         });


      


// if (savedUser) {
// res.status(201).json({
//     username: savedUser.username,
//     email: savedUser.email,
//      password: savedUser.password,
//     id: savedUser._id,
//     token: generateToken(savedUser._id)
// });
// }


// res.status(201).json({
//     success: true,
//     message: "user created",
//     savedUser,
// });


//     } else {
//         res.status(400).json({
//             error: true,
//             message: "Invalid data",
//         });
//     }
// };

// user login
// async function loginUser(req, res) {
// try {
//     const {email, password} = req.body;
//     const user =await User.findOne({email});

//     if (!user) {
//         return res.status(404).json({
//             error: true,
//             message: "Account not found",
//         });
//     }

//     const isValid = await bcrypt.compare(password, user.password);

//     if (!isValid) {
//         return res.status(400).json({
//           error:true,
//           message: "Invalid password"  
//         });
//     }

//     return res.status(200).send({
//         success: true,
//         message: "User logged in",
//     });
// }catch (error) {
//     console.error(error);
//     return res.status(500).json({
//         error: true,
//         message: "Couldn't login. Please try again.",
//     });
// }
// }

// getting a user
const getUsers= async(req, res) =>  {
const users = await User.find();
res.status(200).json(users);
}

const Register = async (req, res) => {
    // validate user
    const { error } = validateRegister.validate(req.body);
    if (error) return res.status(403).send(error.details[0].message);
  
    // complexity level and hashing using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    // find user from db
    const emailFound = await User.findOne({ email: req.body.email });
    if (emailFound) return res.status(404).send("email already exit");
  
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      
      password: hashedPassword,
    });
  
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      
      token: generateToken(newUser._id),
    });
  };


  const loginUser = async (req, res) => {
    // user varification
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("account not found");
    // password verification
    const varifiedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!varifiedPassword)
      return res.status(404).send("email or password invalid");
  
    // res.headers("authorization", token_id).send(token_id)
    res.status(202).json({
      _id: user._id,
      username: user.name,
      email: user.email,
    
      token: generateToken(user._id),
    });
  };





module.exports = {Register, loginUser, getUsers}