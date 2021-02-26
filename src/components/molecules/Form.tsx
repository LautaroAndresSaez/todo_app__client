import React from 'react';

import { InputProps } from '../../types/Input';
import Input from '../atoms/Input';

import { useForm } from '../../hooks/useForm';


interface FormProps {
    inputs: Array<InputProps>
}

const Form: React.FC<FormProps> = ({ inputs }) => {


    const onChange = (e: any) => {

    }

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            {
                inputs.map(input => <Input {...input} onChange={onChange} />)
            }
        </form>
    )
}

export default Form;