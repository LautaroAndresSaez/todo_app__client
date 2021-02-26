import '../../sass/components/Input.scss';

import { InputProps } from '../../types/Input';
import React from 'react';

const Input: React.FC<InputProps> = ({ name, type, placeholder, onChange, value, error }) => {


    return (
        <div className={`input  ${error !== '' && 'input--error'}`}>
            <label
                className={
                    `input__placeholder ${value !== '' && 'input__placeholder--complete'}`
                }>
                {placeholder}
            </label>
            <input
                className='input__input'
                name={name}
                type={type}
                onChange={onChange}
                value={value}
            />
            {
                error && (
                    <div
                        className='input__error'
                    >
                        {error}
                    </div>
                )
            }
        </div>
    )
}

export default Input;