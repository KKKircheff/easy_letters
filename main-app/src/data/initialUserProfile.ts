import {UserProfile} from './userProfileTypes';

export const initialUserProfile: UserProfile = {
    uid: '',
    admin: {
        createdAt: null,
        email: '',
        aiCredits: 10,
        pricePlan: 'free',
        planValidTill: null,
    },
    general: {
        firstName: '',
        lastName: '',
    },
    webLinks: [],
    education: [],
    languages: [],
    careerHistory: [],
    skills: [],
    summary: '',
    certifications: [],
    projects: [],
    volunteerExperience: [],
    publications: [],
    awards: [],
    publicEngagments: [],
    proMembership: [],
    references: [],
    hobbies: [],
    applicationDocs: [],
    invoices: [],
};
