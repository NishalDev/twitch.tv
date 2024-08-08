import User from "../../models/User.js";

export const postRegister = async (req, res) => {
    const user = await User.create({
        username: 'Mark',
        email: 'testemail@ad.com',
        password: "password",
    })
    return res.send("User has been added to database");
};
 