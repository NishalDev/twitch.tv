export const validateUsername = (username) => {
    // Username should have 3-8 characters without spaces
    const regex = /^[^\s]{3,8}$/; // This ensures no spaces and 3-8 characters
    return regex.test(username);
};

export const usernamevalidationMessage = "Username should have between 3 and 8 characters. No spaces are allowed.";
