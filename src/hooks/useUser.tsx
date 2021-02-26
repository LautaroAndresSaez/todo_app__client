import { useEffect, useState } from 'react';

import firebase from 'firebase';

const auth = firebase.auth

export const useUser = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [error, setError] = useState<{} | null>(null);

    useEffect(() => {
        setTimeout(() => firebase.auth().currentUser, 300)
    }, [])

    useEffect(() => {
        setTimeout(() => setError(null), 3000)
    }, [error])

    const loadUser = () => setUser(firebase.auth().currentUser);

    const logIn = async (email: string, password: string) => {
        await auth().signInWithEmailAndPassword(email, password).catch(setError)
        loadUser();
    }

    const register = async (email: string, password: string) => {
        await auth().createUserWithEmailAndPassword(email, password).catch(setError)
        loadUser();
    }

    const logOut = async () => {

    }


    return {
        error,
        user,
        register,
        logIn,
        logOut,
    };
}