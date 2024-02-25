export type Admin = {
    createdAt: Date;
    email: string;
    pricePlan: 'free' | 'singleShot' | 'proActive';
    aiCredits?: number;
    planValidTill: Date;
};

export type General = {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    city?: string;
    country?: string;
    postCode?: string;
};

export type WebLink = {
    id?: string;
    media: string;
    link: string;
};
export type Education = {
    id?: string;
    schoolName: string;
    schoolLocation: string;
    degree: string;
    fieldOfStudy: string;
    graduationDate: Date | null;
};
export type Language = {
    id?: string;
    language: string;
    level:
        | 'beginner'
        | 'elementary'
        | 'intermediate'
        | 'advanced'
        | 'proficient'
        | 'native';
};
export type CareerHistory = {
    id?: string;
    jobTitle: string;
    employer: string;
    location: string;
    startDate: Date | null;
    endDate: Date | 'current' | null;
};
export type Skill = {
    id?: string;
    skill: string;
};
export type Summary = string;

export type ApplicationDoc = {
    id?: string;
    resumeStorageId?: string;
    resumeName?: string;
    cvStorageId?: string;
    cvName?: string;
    coverLetterStorageId?: string;
    coverLetterName?: string;
};
export type Invoice = {
    id?: string;
    invoiceNumber: string;
    invoiceDate: Date;
    invoiceAmount: number;
    invoiceStorageId: string;
};

export type UserProfile = {
    uid: string;
    admin: Admin;
    general: General;
    webLinks: WebLink[] | [];
    education?: Education[] | [];
    languages?: Language[] | [];
    careerHistory?: CareerHistory[] | [];
    skills?: Skill[] | [];
    summary?: Summary | null;
    applicationDocs?: ApplicationDoc[] | [];
    invoices?: Invoice[] | [];
};

type ArrayKeys<T> = {
    [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];

export type SectionKeys = ArrayKeys<UserProfile>;

export type ArraySectionsValues =
    | WebLink
    | Education
    | Language
    | CareerHistory
    | Skill
    | ApplicationDoc
    | Invoice;
