import React, { createContext, useState, useEffect } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebaseConfig';
import Loading from '../components/Loading';

export const AuthCon = createContext();

const AuthProvider =  ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <Loading />;
    }
    return (
        <AuthCon.Provider value={{ user }}>{children}</AuthCon.Provider>
    );
};

export default AuthProvider