export const validateEmail = (email) =>{
    // email reassembling 
    const regex = /\s+@\S+\.\S+/;
    return regex.test(email);
};

export const emailValidationMessage = "Please enter the valid email address";