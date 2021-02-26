import React, { useContext, useEffect, useState } from 'react';
import { RegisterFormData, RegisterFormError } from '../../types/RegisterForm';

import {ArrowRepeat} from 'react-bootstrap-icons';
import Input from '../atoms/Input';
import { UserContext } from '../../contexts/UserContext.js';
import { validateEmail } from '../../helpers/emailVerify';

const voidForm: RegisterFormData = {
    email: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm: React.FC = () => {

    const { register, error } = useContext(UserContext);

    const [form, setForm] = useState<RegisterFormData>(voidForm);
    const [status, setStatus] = useState<RegisterFormError>({});
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const isValidEmail = validateEmail(form.email);
        let status = {};
        if (!isValidEmail && form.email !== '') {
            status = {
                email: "Email isn't valid"
            }
        }
        if (form.password.length < 5 && form.password !== '') {
            status = {
                ...status,
                password: 'Password is short, its length must be 5 characters'
            }
        }
        if ((form.confirmPassword !== form.password || form.password === '') && form.confirmPassword !== '') {
            status = {
                ...status,
                confirmPassword: 'Both fields must be the same'
            }
        }

        const isValid = Object.values(status).every(error => error === undefined) && Object.values(form).every(x => x !== '');
        setStatus(status);
        setIsValid(isValid);
    }, [form])

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        await register(form.email, form.password);
        if(!error){
            setForm(voidForm);
        }
        setIsLoading(false);
    }

    return (
        <form
            className='form'
            onSubmit={onSubmit}
        >
            <Input
                name='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                value={form.email}
                error={status.email}
            />
            <Input
                name='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                value={form.password}
                error={status.password}
            />
            <Input
                name='confirmPassword'
                type='password'
                placeholder='Repeat your password'
                onChange={onChange}
                value={form.confirmPassword}
                error={status.confirmPassword}
            />
            <button
                className={`form__submit ${isValid ? '' : 'form__submit--disabled'}`}
                type='submit'
                disabled={!isValid}
            >
                {
                    isLoading ? (<ArrowRepeat size={25} className='loading'/>) : 'Create account'
                }
            </button>
            {
                error && (
                    <div className='error'>
                        { error?.message }
                    </div>
                )
            }
        </form>
    );
}

export default RegisterForm;