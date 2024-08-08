import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const postRegister = async (req, res) => {
    try{
        const { username, email, password} = req.body;
        const userExists = await User.exists({ email });
        if(userExists){
            return res.status(409).send("E-mail already in use");
        }
        const encrytedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encrytedPassword,
        })

        //create JWT token
        const token = jwt.sign(
            // user details which we would like to encrypt in jWT token
            {
                userId: user._id,
                email,
            },
            // secret
            process.env.TOKEN_KEY,
            // additional config
            {
                expiresIn: "8h",
            }
        );
        
        //send success response back to the user with data of the registered user and JWT  
        return res.status(201).json({
            userDetails: {
                email,
                username,
                token,
            },
        })
        
    }catch(err){
        console.log(err);
        return res.status(500).send('Error occured. Please try again')
    }
    return res.send("User has been added to database");
};
 