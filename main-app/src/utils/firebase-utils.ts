// @ts-ignore
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// @ts-ignore
import {getAuth, doc, User} from 'firebase/auth';
// @ts-ignore
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';
// @ts-ignore
import {firebaseConfig} from './firebase-config';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import {UserProfile} from '../data/userProfileTypes';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const analitycs = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const getFirebaseStorageImageUrl = async (fullPath: string) => {
    try {
        const pathReference = ref(storage, fullPath);
        const url = await getDownloadURL(pathReference);
        const newUrl = new URL(url, import.meta.url).href;
        return newUrl;
    } catch (error) {
        return 'https://firebasestorage.googleapis.com/v0/b/red-digit-ai.appspot.com/o/blogs%2FblogPost-empty%2Fred-digit-ai-default.webp?alt=media&token=290a56ea-1f0a-4eaa-8b80-bada0add9fa1'; // Return null if there's an error
    }
};

export const getUserProfileInfo = async (uid: string) => {
    const userDocRef = doc(db, 'users', uid);
    try {
        const userSnapshot = (await getDoc(userDocRef)).data() as
            | UserProfile
            | undefined;
        return userSnapshot;
    } catch (error) {
        throw new Error(error);
    }
};

export const updateUserProfileFirebase = async (
    updatedProfile: UserProfile
) => {
    const userDocRef = doc(db, 'users', updatedProfile.uid);
    try {
        await setDoc(userDocRef, updatedProfile);
    } catch (error) {
        throw new Error(error);
    }
};

export const createUserDocumentFromAuth = async (loggedUser: User) => {
    const userDocRef = doc(db, 'users', loggedUser.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = loggedUser;
        const createdAt = new Date();
        const planValidTill = new Date(
            createdAt.getTime() + 30 * 24 * 60 * 60 * 1000
        );
        const pricePlan = 'free';

        const names = displayName.split(' ');
        const [firstName, lastName] = names;

        const initProfile: UserProfile = {
            uid: loggedUser.uid,
            general: {
                createdAt,
                firstName,
                lastName,
                email,
                pricePlan,
                planValidTill,
            },
        };

        try {
            await setDoc(userDocRef, initProfile);
            return initProfile;
        } catch (error) {
            throw new Error(error);
        }
    } else {
        const profile = userSnapshot.data() as UserProfile | undefined;
        return profile;
    }
};

export default app;
