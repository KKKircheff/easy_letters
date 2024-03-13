import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";

import {
    Box,
    Button,
    Stack,
    useTheme
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import ProfileSidebar from "./ProfileSidebar.section";
import Footer from "../../components/footer/Footer.component";

import useScreenWidth from '../../hooks/useScreenWidth';
import { styleVariables } from '../../styles/styleVariables';

import { useForm } from 'react-hook-form';

import { UserProfile } from '../../data/userProfileTypes'
import General from "./General.section";
import Languages from "./Languages.section";
import Skills from "./Skills.section";
import Education from "./Education.section";
import CareerHistory from "./CareerHistory.section";
import FormSaveButton from "../../components/buttons/form-buttons/FormSaveButton.component";
import FormRevertButton from "../../components/buttons/form-buttons/FormRevertButton.component";
import PreviousButton from "../../components/buttons/form-buttons/PreviousButton.component";
import NextButton from "../../components/buttons/form-buttons/NextButton.component";
import Invoices from "./Invoices.section";
import ApplicationDocuments from "./ApplicationDocuments.section";
import Summary from "./Summary.section";
import { scrollToTop } from "../../layout/ScrollToTop.component";
export type SectionsToRender = keyof UserProfile

const Profile = () => {
    const c = useTheme().palette
    const f = useTheme().fontSize

    const { xs, sm, md, lg } = styleVariables.layoutPadding;

    const { userProfile, updateUserProfile } = useUserContext()

    const { handleSubmit, control, formState: { isDirty }, reset } = useForm<UserProfile>({
        defaultValues: { ...userProfile }
    });

    const totalWidth = useScreenWidth()

    const wideWidth = 240
    const compactWidth = 70

    const restWideWidth = totalWidth - compactWidth

    const isWide = totalWidth > 600;


    const [isSidebarWide, setIsSidebarWide] = useState(totalWidth > 900)

    const sections = [
        { component: General, menuKey: 'general' },
        { component: Languages, menuKey: 'languages' },
        { component: Education, menuKey: 'education' },
        { component: CareerHistory, menuKey: 'careerHistory' },
        { component: Skills, menuKey: 'skills' },
        { component: Summary, menuKey: 'summary' },
        { component: ApplicationDocuments, menuKey: 'applicationDocs' },
        { component: Invoices, menuKey: 'invoices' },
    ];

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const CurrentSection = sections[currentSectionIndex].component;

    const handlePrevious = () => {
        setCurrentSectionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentSectionIndex(prevIndex => Math.min(prevIndex + 1, sections.length - 1));
    };


    const handleUpdate = async (data: UserProfile) => {
        try {
            await updateUserProfile(data);
            alert('Updated!')
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        reset(userProfile);
    }, [userProfile]);

    useEffect(() => {
        scrollToTop()
    }, [currentSectionIndex]);

    return (
        <Stack
            direction='row' position='sticky'
            top={0} left={0} minHeight='100vh'
            bgcolor='neutral.700'
        >
            <ProfileSidebar
                sections={sections}
                wideWidth={wideWidth}
                compactWidth={compactWidth}
                setIsSidebarWide={setIsSidebarWide}
                isSidebarWide={isSidebarWide}
                setCurrentSectionIndex={setCurrentSectionIndex} />

            <Stack
                role='form' bgcolor='neutral.50'
                width='100%' maxWidth={restWideWidth}
                ml={{ xs: `${compactWidth}px`, sm: '0' }}
                sx={{
                    transition: 'all .2s ease-in',
                    overflowX: 'hidden',
                }}>
                <UnderNavBar />
                <form onSubmit={handleSubmit(handleUpdate)} noValidate>

                    <Box px={{ md: xs, lg: md }}>
                        <CurrentSection control={control} />
                    </Box>

                    <Stack
                        direction='row' spacing={1} mx='auto' py={5}
                        px={{ xs: '3vw', sm: xs, md: sm, lg: md, xl: lg }}
                        justifyContent='space-between'>

                        {currentSectionIndex > 0 ?
                            <PreviousButton variant='outlined' color='neutral' type='button' onClick={handlePrevious}>
                                {totalWidth > 700 ? 'Previous' : ''}
                            </PreviousButton>
                            : <div></div>
                        }

                        <Stack direction={'row'} spacing={1}>
                            {isDirty &&
                                <FormRevertButton color='warning' type='button' onClick={() => reset()}>
                                    {totalWidth > 700 ? 'Revert' : ''}
                                </FormRevertButton>}

                            {isDirty &&
                                <FormSaveButton color='primary' variant='solid' type='submit'>
                                    {isWide ? 'Save' : 'Save'}
                                </FormSaveButton>}
                        </Stack>

                        {(currentSectionIndex < sections.length - 1) ?
                            <NextButton variant='outlined' color='neutral' type='button' onClick={handleNext}>
                                {totalWidth > 700 ? 'Next' : ''}
                            </NextButton>
                            : <div></div>
                        }
                    </Stack>
                </form>
                <Footer />
            </Stack>
        </Stack >
    )
}

export default Profile