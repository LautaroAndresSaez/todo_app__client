import { useState } from 'react';
import { useUser } from './useUser';

export const useForm = <T, E>() => {

    const [form, setForm] = useState<T | {}>({});
    const [error, setError] = useState<E | {}>({});

    const update = (field: string, value: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    return {
        form,
        error,
        update,
    }
}

