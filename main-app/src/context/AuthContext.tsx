import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

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


import { auth, createUserDocumentFromAuth, updateUserProfileFirebase } from '../utils/firebase-utils.ts';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../data/userProfileTypes.ts';

type UserContextType = {
    user: User | null;
    userProfile: UserProfile | null;
    updateUserProfile: (UserProfile) => Promise<void>
    signInWithGoogleRedirect: () => Promise<void>;
    signInWithGooglePopUp: () => Promise<void>;
    logInWithEmail: (email: string, password: string) => Promise<UserCredential>;
    signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logOut: () => Promise<void>;
};


const UserContext = createContext<UserContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider;

    googleProvider.setCustomParameters({
        prompt: 'select_account',
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

    const updateUserProfile = async (updatedProfile: UserProfile) => {
        await updateUserProfileFirebase(updatedProfile);
        setUserProfile(updatedProfile);
    }

    useEffect(() => {
        const logInRedirect = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
                console.log('There is response')
                navigate('/profile')
            }
        }
        logInRedirect();
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const { getUserProfileInfo } = await import('../utils/firebase-utils.ts')
                const userDocRef = await getUserProfileInfo(currentUser.uid);
                setUserProfile(userDocRef);
                setUser(currentUser);
                return
            } else {
                setUserProfile(null)
                setUser(null);
                return
            }
        })
        return () => unsubscribe();
    }, [user]);

    console.log('UeerProfile from AuthContext:', userProfile)
    return (
        <UserContext.Provider
            value={{
                user,
                userProfile,
                updateUserProfile,
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