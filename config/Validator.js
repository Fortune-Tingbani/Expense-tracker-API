// const yup = require("yup");

// function validateRegister(data) {
//     const userSchema = yup.object().shape({
//         username: yup.string().required("username must be filled").min(3).max(20),
//         email: yup.string().required("email is required").min(10).max(50),
//         password: yup.string().required("passwoord required").min(8).max(20),
//     });
//     return userSchema.validate(data);
// }




const Joi = require("joi");

// register user validation
const validateRegister = new Joi.object({
  username: Joi.string().min(10).required().max(20),
  email: Joi.string().email().min(12).required().max(1040),
  password: Joi.string().min(8).max(50).required(),
});


module.exports = { validateRegister };


