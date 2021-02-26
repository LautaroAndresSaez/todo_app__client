import '../../sass/components/registerForm.scss';

import { LogInErrors, LogInFormData } from '../../types/LogInForm';
import React, { useContext, useEffect, useState } from 'react';

import {ArrowRepeat} from 'react-bootstrap-icons';
import Input from '../atoms/Input';
import { UserContext } from '../../contexts/UserContext';
import { toDoList } from '../../routes/routes';
import { useHistory } from 'react-router-dom';
import { validateEmail } from '../../helpers/emailVerify';

const voidForm = {
    email: '',
    password: ''
}

const LogInForm: React.FC = () => {

    const { logIn, user, error } = useContext(UserContext);
    const history = useHistory();


    const [form, setForm] = useState<LogInFormData>(voidForm);
    const [status, setStatus] = useState<LogInErrors>({});
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
        const isValid = Object.values(status).every(error => error === undefined);
        setStatus(status);
        setIsValid(isValid);
    }, [form])

    useEffect(() => {
        if (user) {
            history.push(toDoList.path);
        }
    }, [user, history])

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
        await logIn(form.email, form.password);
        setForm(voidForm);
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
            <button
                className={`form__submit ${isValid ? '' : 'form__submit--disabled'}`}
                type='submit'
                disabled={!isValid}
            >
                {
                    isLoading ? (<ArrowRepeat size={25} className='loading'/>) : 'Log in'
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
    )
}

export default LogInForm;