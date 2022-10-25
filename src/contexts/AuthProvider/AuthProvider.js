import React, { createContext, useState } from 'react';
import {getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    console.log(user);
    const providerLogin = (provider)=> {
        return signInWithPopup(auth, provider);
    }
    const name = {name : "Masum"};
    const authInfo = {user, providerLogin, setUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;