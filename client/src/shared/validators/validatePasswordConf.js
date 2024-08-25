export const validatePasswordConf = (pass, confPass) =>{
    return pass === confPass;
};
export const PasswordConfvalidationMessage = "Password do not match.";