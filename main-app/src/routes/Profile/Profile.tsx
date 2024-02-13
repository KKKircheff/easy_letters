import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { UserProfile } from "../../data/userProfileTypes"

import {
    Box,
    Stack,
    Typography
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import ProfileSidebar from "./ProfileSidebar.section";
import DarkButton from "../../components/buttons/dark-button/DarkButton.component"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ProfileGeneral from "./ProfileGeneral.section";
import Footer from "../../components/footer/Footer.component";

export type SectionsToRender = 'general'
    | 'education'
    | 'languages'
    | 'careerHistory'
    | 'skills'
    | 'summary'
    | 'applicationDocs'
    | 'invoices'

const Profile = () => {
    const { userProfile, updateUserProfile } = useUserContext()
    const [draftProfile, setDraftProfile] = useState<UserProfile | null>(userProfile)

    const [isSidebarWide, setIsSidebarWide] = useState(window.innerWidth > 900)
    const [sectionToRender, setSectionToRender] = useState<SectionsToRender>('general');

    const wideWidth = '220px'
    const compactWidth = '70px'

    useEffect(() => {
        setDraftProfile({ ...userProfile })
    }, [userProfile])

    const handleUpdate = async () => {
        const updatedProfile = {
            ...userProfile,
            ...draftProfile
        };
        try {
            await updateUserProfile(updatedProfile);
            alert('Updated!')
        } catch (error) {
            alert(error)
        }
    };

    const handleAutocoplete = (value: string, currentSection: string, inputKey: string) => {
        updateCurrentSection(value ?? '', currentSection, inputKey)
    }

    const handleProfile = (e: React.ChangeEvent<HTMLInputElement>, currentSection) => {
        setDraftProfile({
            ...draftProfile,
            [currentSection]: {
                ...draftProfile[currentSection],
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    };

    const updateCurrentSection = (value: string, currentSection: string, key: string) => {
        setDraftProfile({
            ...draftProfile,
            [currentSection]: {
                ...draftProfile[currentSection],
                [key]: value ?? ''
            }
        });
    }

    // const handleDelete = async () => {
    //     const updatedProfile = { ...userProfile };

    //     if (updatedProfile.general && updatedProfile.general.phoneNumber) {
    //         delete updatedProfile.general.phoneNumber;
    //     }
    //     try {
    //         await updateUserProfile(updatedProfile);
    //     } catch (error) {
    //         alert(error)
    //     }
    // };

    return (
        <Stack
            direction='row'
            position='sticky'
            top={0}
            minHeight='100vh'
            bgcolor='secondary.50'
        >
            <Stack
                role='sidebar'
                alignItems='flex-start'
                width={isSidebarWide ? wideWidth : compactWidth}
                minWidth={isSidebarWide ? wideWidth : compactWidth}
                position='sticky'
                maxHeight='95vh'
                top={0}
                left={0}
                pl={1}
                sx={{
                    transition: 'all .2s ease-in'
                }}>
                <ProfileSidebar
                    setIsSidebarWide={setIsSidebarWide}
                    isSidebarWide={isSidebarWide}
                    setSectionToRender={setSectionToRender} />
            </Stack>

            <Stack
                role='section'
                bgcolor='white'
                width='100%'
                px={1.5}
            >
                <UnderNavBar />

                <ProfileGeneral
                    draftProfile={draftProfile}
                    setDraftProfile={setDraftProfile}
                    handleAutocoplete={handleAutocoplete}
                    handleProfile={handleProfile}
                    updateCurrentSection={updateCurrentSection}
                />

                <Box py={4}>
                    <DarkButton
                        onClick={handleUpdate}
                        endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
                    >
                        Update profile
                    </DarkButton>
                </Box>

                <Footer />
            </Stack>
        </Stack>
    )
}

export default Profile