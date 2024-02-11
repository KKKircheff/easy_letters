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
    signInWithGooglePopUp: () => Promise<void>;
    logInWithEmail: (email: string, password: string) => Promise<void>;
    signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logOut: () => Promise<void>;
};


const UserContext = createContext<UserContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider;

    googleProvider.setCustomParameters({
        prompt: 'select_account',
    })

    const signInWithGooglePopUp = async () => {
        const newUser = await signInWithPopup(auth, googleProvider)
        const profile = await createUserDocumentFromAuth(newUser.user);
        // console.log('creted profile in signUpwithGoogle', profile)
        setUserProfile(profile)
    }

    const signUpWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(newUser.user, { displayName: `${firstName} ${lastName}` })
        await newUser.user.reload();
        const updatedUser = auth.currentUser;
        const profile = await createUserDocumentFromAuth(updatedUser)
        setUserProfile(profile)
    }

    const logInWithEmail = async (email: string, password: string) => {
        // const { signInWithEmailAndPassword } = await import('firebase/auth')
        const loggedUser = await signInWithEmailAndPassword(auth, email, password);
        const profile = await getUserProfileInfo(loggedUser.user.uid)
        setUserProfile(profile)
    };

    const logOut = async () => signOut(auth);

    const updateUserProfile = async (updatedProfile: UserProfile) => {
        await updateUserProfileFirebase(updatedProfile);
        setUserProfile(updatedProfile);
    }

    const signInWithGoogleRedirect = async () => signInWithRedirect(auth, googleProvider)

    useEffect(() => {
        const logInRedirect = async () => {
            const response = await getRedirectResult(auth)
            // console.log('2:response useEffect:', response)
            if (response) {
                const profile = await createUserDocumentFromAuth(response.user)
                setUserProfile({ ...profile })
                navigate('/profile')
            }
        }
        logInRedirect();
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log('1:unsubscribe:', currentUser)
            if (currentUser) {
                const profile = await getUserProfileInfo(currentUser.uid);
                if (profile) {
                    setUserProfile(profile)
                }
                setUser(currentUser);
                return
            }
            setUserProfile(null)
            setUser(null);
            return

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