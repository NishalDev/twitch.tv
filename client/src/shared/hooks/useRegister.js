import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { register as registerRequest } from "../../API";

export const useRegister = () => {
    const [isloading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (email, password, username) => {
        setIsLoading(true);
        const response = await registerRequest({
            email,
            password,
            username,
        });
        setIsLoading(false);
        if(response.error){
            return console.log(response.log)
        }
        const {userDetails}= response.data;
        
        localStorage.setItem('user', userDetails);

        navigate('/');
    };
    return {
        register,
        isloading,
    };
};

