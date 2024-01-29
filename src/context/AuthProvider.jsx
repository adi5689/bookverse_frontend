// AuthProvider.js
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    const createUser = async (email, password, name) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            try {
                await updateProfile(user, { displayName: name });
                setUser(user);
                setLoading(false);
            } catch (error) {
                console.error("Error updating user profile:", error);
                setLoading(false);
                throw error;
            }
        } catch (error) {
            console.error("Error creating user:", error);
            setLoading(false);
            throw error;
        }
    }

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
            setLoading(false);
        } catch (error) {
            console.error("Error signing in:", error);
            setLoading(false);
            throw error;
        }
    }

    const signInWithGoogle = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            setUser(user);
            setLoading(false);
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setLoading(false);
            throw error;
        }
    }

    const SignOut = async () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        loading,
        SignOut
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
