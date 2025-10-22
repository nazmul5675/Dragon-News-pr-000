import { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const notify = (message) => {
        toast(message);
    }

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const signInExistingUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updateUserData) => {
        return updateProfile(auth.currentUser, updateUserData)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOutUser,
        signInExistingUser,
        loading,
        setLoading,
        updateUser,
        notify

    }

    return (
        <AuthContext value={authData}>
            {children}

            <ToastContainer />
        </AuthContext>
    );
};

export default AuthProvider;