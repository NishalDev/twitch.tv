import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { login as loginRequest } from "../../API";

export const useLogin = () => {
    const [isloading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await loginRequest({
            email,
            password,
        })
        setIsLoading(false);
        if(response.error){
            return console.log(response.log)
        }
        const {userDetails}= response.data;
        
        localStorage.setItem('user', userDetails);

        navigate('/');
    };
    return {
        login,
        isloading,
    };
};

