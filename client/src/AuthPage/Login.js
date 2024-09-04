import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import { emailValidationMessage, PasswordvalidationMessage, validateEmail, validatePassword } from "../shared/validators";
export const Login = ({ switchAuthHandler }) => {
    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value: value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;

        switch (field){
            case 'email':
                isValid = validateEmail(value);
            break;
            case 'password':
                isValid = validatePassword(value);
            break;
            default:
                break;
        }
        setFormState(prevState =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value,
                isValid,
                showError: !isValid,
            },
        }));
    };

    console.log(formState);
    return (
        <div class="login-container">
            <Logo text={'Log in to Clone'} />
            <form className="auth-form">
                <AuthInput
                    field='email'
                    label='Email'
                    value={formState.email.value} onChangeHandler={handleInputValueChange}
                    type = 'text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}

                />
                <AuthInput
                    field='password'
                    label='Password'
                    value={formState.password.value} onChangeHandler={handleInputValueChange}
                    type = 'password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={PasswordvalidationMessage}
                />
                <button
                disabled={!formState.password.isValid || !formState.email.isValid}>Log in</button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Don't have an Account? sign up
            </span>
        </div>
    );
};