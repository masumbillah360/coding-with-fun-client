import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    const providerLogin = (provider)=> {
        return signInWithPopup(auth, provider);
    }


    const createNewUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[])

    const authInfo = {user,
        setUser,
        loading, 
        setLoading, 
        providerLogin,
        createNewUser,
        updateUserProfile, 
        loginUser, 
        signOutUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;