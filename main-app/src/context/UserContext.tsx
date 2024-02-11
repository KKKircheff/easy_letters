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
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';


import { auth, createUserDocumentFromAuth, getUserProfileInfo, updateUserProfileFirebase } from '../utils/firebase-utils.ts';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../data/userProfileTypes.ts';

type UserContextType = {
    user: User | null;
    userProfile: UserProfile | null;
    updateUserProfile: (UserProfile) => Promise<void>
    signInWithGoogleRedirect: () => Promise<void>;
    signInWithGooglePopUp: () => void;
    logInWithEmail: (email: string, password: string) => void;
    signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logOut: () => Promise<void>;
};


const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider;

    googleProvider.setCustomParameters({
        prompt: 'select_account',
    })

    const signUpWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(response.user, { displayName: `${firstName} ${lastName}` })
        await response.user.reload();
        const updatedUser = auth.currentUser;
        const profile = await createUserDocumentFromAuth(updatedUser);
        setUserProfile(profile)
    }

    const logInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

    const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

    const signInWithGoogleRedirect = async () => signInWithRedirect(auth, googleProvider)

    const logOut = () => signOut(auth);

    const updateUserProfile = async (updatedProfile: UserProfile) => {
        await updateUserProfileFirebase(updatedProfile);
        setUserProfile(prevState => ({ ...prevState, ...updatedProfile }));
    }

    useEffect(() => {
        const logInRedirect = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const profile = await createUserDocumentFromAuth(response.user)
                setUserProfile(profile)
                setUser(response.user)
                navigate('/profile')
            }
        }
        logInRedirect();
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser && currentUser.displayName !== null) {
                const profile = await createUserDocumentFromAuth(currentUser);
                setUserProfile(profile)
            } else {
                setUserProfile(null)
            }
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                userProfile,
                updateUserProfile,
                logInWithEmail,
                signInWithGooglePopUp,
                signUpWithEmail,
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