import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    UserCredential,
    updateProfile,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    getRedirectResult,
} from 'firebase/auth';


import { auth, createUserDocumentFromAuth } from '../utils/firebase-utils.ts';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
    user: User | null;
    signInWithGoogleRedirect: () => Promise<void>;
    signInWithGooglePopUp: () => Promise<void>;
    logInWithEmail: (email: string, password: string) => Promise<UserCredential>;
    signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logOut: () => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const logRedirect = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
                navigate('/profile')
            }
        }
        logRedirect();
    }, [])


    const googleProvider = new GoogleAuthProvider;
    googleProvider.setCustomParameters({
        prompt: 'select_account',
        state: '/profile'
    })

    const signInWithGooglePopUp = async () => {
        const newUser = await signInWithPopup(auth, googleProvider)
        return createUserDocumentFromAuth(newUser.user);
    }

    const signInWithGoogleRedirect = async () => signInWithRedirect(auth, googleProvider)

    const signUpWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(newUser.user, { displayName: `${firstName} ${lastName}` })
        const updatedUser = auth.currentUser
        return createUserDocumentFromAuth(updatedUser)
    }

    const logInWithEmail = async (email: string, password: string) => {
        const { signInWithEmailAndPassword } = await import('firebase/auth')
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        const { signOut } = await import('firebase/auth')
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                logInWithEmail,
                signUpWithEmail,
                signInWithGooglePopUp,
                signInWithGoogleRedirect,
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