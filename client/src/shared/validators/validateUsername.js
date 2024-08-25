export const validateUsername = (username) =>{
    // username should have 3-8 characters without spaces
    const regex = /^\s{3,8}$/;
    return regex.test(username);
};
export const usernamevalidationMessage = "Username should have between 3 and 8 characters. No spaces are allowed.";