export type GeneralUserProfile = {
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    pricePlan: 'free' | 'singleShot' | 'proActive';
    planValidTill: Date;
    phoneNumber?: string;
    socialLinks?: {
        media: string;
        link: string;
    }[];
};

export type UserProfile = {
    uid: string;
    general: GeneralUserProfile;
};
