import {UserProfile} from './userProfileTypes';

export const initialUserProfile: UserProfile = {
    uid: '',
    general: {
        createdAt: null,
        firstName: '',
        lastName: '',
        email: '',
        pricePlan: 'free',
        planValidTill: null,
        aiCredits: 10,
    },
    education: [
        {
            schoolName: '',
            schoolLocation: '',
            degree: '',
            fieldOfStudy: '',
            graduationDate: null,
        },
    ],
    languages: [
        {
            language: 'English',
            level: 'native',
        },
    ],
    careerHistory: [
        {
            jobTitle: '',
            employer: '',
            location: '',
            startDate: null,
            endDate: null,
        },
    ],
    skills: [''],
    summary: '',
    applicationDocs: [
        {
            resumeStorageId: '',
            resumeName: '',
            cvStorageId: '',
            cvName: '',
            coverLetterStorageId: '',
            coverLetterName: '',
        },
    ],
    invoices: [
        {
            invoiceNumber: '',
            invoiceDate: null,
            invoiceAmount: null,
            invoiceStorageId: '',
        },
    ],
};
