import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    UserCredential,
} from 'firebase/auth';

import { auth } from '../utils/firebase-utils.ts';
import { User } from 'firebase/auth';

type UserContextType = {
    user: User | null;
    logInWithEmail: (email: string, password: string) => Promise<UserCredential>;
    logInWithGoogle?: () => Promise<UserCredential>;
    logOut: () => Promise<void>;
    signUpWithEmail: (email: string, password: string) => Promise<UserCredential>;
    signUpWithGoogle?: () => Promise<UserCredential>;
};

const UserContext = createContext<UserContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);

    const logInWithEmail = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logInWithGoogle = () => {
        alert('logIn with Google');
    };

    const logOut = () => {
        return signOut(auth);
    };

    const signUpWithEmail = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signUpWithGoogle = () => {
        alert('signUpWithGoogle');
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                logInWithEmail,
                // logInWithGoogle,
                signUpWithEmail,
                // signUpWithGoogle,
                logOut,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within an AuthContextProvider');
    }
    return context;
};