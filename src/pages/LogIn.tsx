import React from 'react'
import Title from '../components/atoms/Title';
import LogInForm from '../components/organims/LogInForm';

import '../sass/pages/logIn.scss';

import { register } from '../routes/routes';

const LogIn: React.FC = () => {
    return (
        <div className='log-in'>
            <Title>
                Tasks!
            </Title>
            <LogInForm />
            <div className='log-in__create-account' >
                {
                    register.toLink('Create account!')
                }
            </div>
        </div>
    );
}

export default LogIn;
