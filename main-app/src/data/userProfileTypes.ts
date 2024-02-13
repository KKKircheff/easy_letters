export type GeneralUserProfile = {
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    pricePlan: 'free' | 'singleShot' | 'proActive';
    planValidTill: Date;
    phoneNumber?: string;
    aiCredits?: number;
    city?: string;
    country?: string;
    postCode?: string;
    webLinks?: {
        media: string;
        link: string;
    }[];
};

export type Education = {
    schoolName: string;
    schoolLocation: string;
    degree: string;
    fieldOfStudy: string;
    graduationDate: Date | null;
}[];

export type Languages = {
    language: string;
    level:
        | 'beginner'
        | 'elementary'
        | 'intermediate'
        | 'advanced'
        | 'proficient'
        | 'native';
}[];

export type CareerHistory = {
    jobTitle: string;
    employer: string;
    location: string;
    startDate: Date | null;
    endDate: Date | 'current' | null;
}[];

export type Skills = string[];

export type Summary = string;

export type ApplicationDocs = {
    resumeStorageId?: string;
    resumeName?: string;
    cvStorageId?: string;
    cvName?: string;
    coverLetterStorageId?: string;
    coverLetterName?: string;
}[];

export type Invoices = [
    {
        invoiceNumber: string;
        invoiceDate: Date;
        invoiceAmount: number;
        invoiceStorageId: string;
    }
];

export type UserProfile = {
    uid: string;
    general: GeneralUserProfile;
    education?: Education;
    languages?: Languages;
    careerHistory?: CareerHistory;
    skills?: Skills;
    summary?: Summary;
    applicationDocs?: ApplicationDocs;
    invoices?: Invoices;
};
