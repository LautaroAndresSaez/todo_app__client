import React from 'react';
import Title from '../components/atoms/Title';
import RegisterForm from '../components/organims/RegisterForm';
import { logIn } from '../routes/routes';

import '../sass/pages/register.scss';

const Register: React.FC = () => {


    return (
        <div className='register'>
            <Title>
                Create Account!
            </Title>
            <RegisterForm />
            <div className='register__log-in'>
                {
                    logIn.toLink('Log in')
                }
            </div>
        </div>
    )
}

export default Register;