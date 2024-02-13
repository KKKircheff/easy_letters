import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { UserProfile } from "../../data/userProfileTypes"

import {
    Box,
    Button,
    Stack,
    Typography,
    useTheme
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import ProfileSidebar from "./ProfileSidebar.section";
import Footer from "../../components/footer/Footer.component";

import DarkButton from "../../components/buttons/dark-button/DarkButton.component"

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ProfileGeneral from "./ProfileGeneral.section";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UndoIcon from '@mui/icons-material/Undo';
import CheckIcon from '@mui/icons-material/Check';

import useScreenWidth from "../../hooks/useScreenWidth";
import { styleVariables } from "../../styles/styleVariables";

export type SectionsToRender = 'general'
    | 'education'
    | 'languages'
    | 'careerHistory'
    | 'skills'
    | 'summary'
    | 'applicationDocs'
    | 'invoices'

const Profile = () => {
    const c = useTheme().palette
    const f = useTheme().fontSize

    const { xs, md, lg } = styleVariables.layoutPadding;

    const { userProfile, updateUserProfile } = useUserContext()
    const [draftProfile, setDraftProfile] = useState<UserProfile | null>(userProfile)

    const totalWidth = useScreenWidth()

    const wideWidth = 224
    const compactWidth = 70

    const restWideWidth = totalWidth - compactWidth

    const isWide = totalWidth > 600;

    const [isSidebarWide, setIsSidebarWide] = useState(totalWidth > 900)
    const [sectionToRender, setSectionToRender] = useState<SectionsToRender>('general');


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
            left={0}
            minHeight='100vh'
            bgcolor='secondary.50'
        >
            <Stack
                zIndex={1}
                role='sidebar'
                alignItems='flex-start'
                width={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
                minWidth={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
                position={{ xs: 'fixed', sm: 'sticky' }}
                bgcolor='secondary.50'
                maxHeight={{ xs: '100vh', sm: '95vh' }}
                top={0}
                left={0}
                pl={1.1}
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
                maxWidth={restWideWidth}
                ml={{ xs: `${compactWidth}px`, sm: '0' }}
                sx={{
                    transition: 'all .2s ease-in',
                    overflowX: 'hidden',
                }}>
                <UnderNavBar />

                <Box px={{ md: xs, lg: md }}>
                    <ProfileGeneral
                        draftProfile={draftProfile}
                        setDraftProfile={setDraftProfile}
                        handleAutocoplete={handleAutocoplete}
                        handleProfile={handleProfile}
                        updateCurrentSection={updateCurrentSection}
                    />
                </Box>

                <Stack
                    direction='column'
                    spacing={2.5}
                    py={4}
                    px={{ xs: '3vw', sm: md, md: xs, lg: md }}
                >

                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        maxWidth='1200px'
                        px={{ md: 1 }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>

                        <DarkButton
                            size='sm'
                            // onClick={handleUpdate}
                            sx={{
                                borderColor: c.neutral[500],
                                bgcolor: c.neutral[600],
                                paddingLeft: 1,
                                paddingRight: { xs: 2, sm: 2.5 },
                                paddingY: .2,

                            }}
                            startDecorator={<UndoIcon sx={{
                                p: .3,
                                border: `2px solid ${c.warning[400]}`,
                                color: c.warning[400],
                                fontSize: f.mediumTitle,
                                fontWeight: 700,
                                borderRadius: 'lg',
                            }} />}
                        >{isWide ? 'Revert changes' : 'Undo'}
                        </DarkButton>

                        <DarkButton
                            onClick={handleUpdate}
                            variant='outlined'
                            color='neutral'
                            sx={{
                                borderColor: c.neutral[500],
                                bgcolor: c.neutral[600],
                                paddingLeft: 1.1,
                                paddingRight: { xs: 2, sm: 2.5 },
                                paddingY: .4,
                            }}
                            startDecorator={<CheckIcon sx={{
                                p: .2,
                                border: `2px solid ${c.primary[500]}`,
                                color: c.primary[500],
                                fontSize: f.mediumTitle,
                                fontWeight: 800,
                                borderRadius: 'lg',
                            }} />}
                        >{isWide ? 'Update profile' : 'Update'}
                        </DarkButton>
                    </Stack>

                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        mx='auto'
                        px={{ md: 1 }}
                    >
                        <Button
                            // onClick={handleUpdate}
                            variant='outlined'
                            color='neutral'
                            sx={{
                                borderWidth: '2px',
                                borderColor: c.neutral[400],
                                color: c.neutral[400],
                                fontWeight: 600,
                                paddingLeft: 1,
                                paddingY: .3,
                            }}
                            startDecorator={<ChevronLeftIcon sx={{
                                color: c.neutral[100],
                                fontSize: f.mediumTitle,
                                bgcolor: c.neutral[400],
                                borderRadius: 'lg',
                            }} />}
                        >
                            previous
                        </Button>

                        <Button
                            // onClick={handleUpdate}
                            variant='outlined'
                            color='neutral'
                            sx={{
                                borderWidth: '2px',
                                borderColor: c.neutral[400],
                                color: c.neutral[400],
                                fontWeight: 600,
                                paddingRight: 1,
                                paddingY: .3,
                            }}
                            endDecorator={<ChevronRightIcon sx={{
                                color: c.neutral[100],
                                fontSize: f.mediumTitle,
                                bgcolor: c.neutral[400],
                                borderRadius: 'lg',
                            }} />}
                        >
                            next
                        </Button>
                    </Stack>

                </Stack>

                <Footer />
            </Stack>
        </Stack >
    )
}

export default Profile