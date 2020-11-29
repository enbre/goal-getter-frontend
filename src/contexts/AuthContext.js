import React, { createContext, useState } from 'react';
import UserModel from '../models/user';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
    const [currentUserName, setCurrentUserName] = useState(localStorage.getItem('name'));
    const storeUser = (userId, userName) => {
        localStorage.setItem('id', userId);
        localStorage.setItem('name', userName);
        setCurrentUser( userId );
        setCurrentUserName( userName );
    };
    const logout = (event) => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        UserModel.logout()
            .then(res => {
            setCurrentUser(null);
            setCurrentUserName(null);
            })
    }
    return (
        <AuthContext.Provider value={{currentUser, currentUserName, storeUser, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;