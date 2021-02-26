import React, { createContext, useEffect } from 'react';

import { useUser } from '../hooks/useUser';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const { user, register, logIn, error } = useUser();


    return (
        <UserContext.Provider value={{
            user,
            register,
            logIn,
            error
        }}>
            {
                children
            }
        </UserContext.Provider>
    )
}

export default UserProvider;