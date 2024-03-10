import { useState } from "react";
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
export type SectionsToRender = keyof UserProfile

const Profile = () => {
    const c = useTheme().palette
    const f = useTheme().fontSize

    const { xs, md, lg } = styleVariables.layoutPadding;

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

    const handlePrevious = () => {
        setCurrentSectionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentSectionIndex(prevIndex => Math.min(prevIndex + 1, sections.length - 1));
    };

    const CurrentSection = sections[currentSectionIndex].component;

    const handleUpdate = async (data: UserProfile) => {
        try {
            await updateUserProfile(data);
            console.log('Data:', data)
            alert('Updated!')
        } catch (error) {
            alert(error)
        }
    };

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

                    <Stack direction='column' spacing={2} py={5} pb={10} px={{ xs: '3vw', sm: md, md: xs, lg: md }}>
                        <Stack
                            direction='row-reverse' spacing={2} mx='auto' px={{ md: 1 }}
                            justifyContent={{ xs: 'space-between', sm: 'right' }}>

                            <FormSaveButton color='primary' variant='solid' type='submit'>
                                {isWide ? 'Save' : 'Save'}
                            </FormSaveButton>

                            {isDirty &&
                                <FormRevertButton color='warning' type='button' onClick={() => reset()}>
                                    {isWide ? 'Revert' : 'Revert'}
                                </FormRevertButton>}

                        </Stack>

                        <Stack direction='row' justifyContent='space-between' mx='auto' px={{ md: 1 }}>

                            <PreviousButton variant='outlined' color='neutral' type='button'
                                disabled={currentSectionIndex === 0} onClick={handlePrevious}>
                                Previous
                            </PreviousButton>

                            <NextButton variant='outlined' color='neutral' type='button'
                                disabled={currentSectionIndex === sections.length - 1} onClick={handleNext}>
                                Next
                            </NextButton>

                        </Stack>
                    </Stack>
                </form>
                <Footer />
            </Stack>
        </Stack >
    )
}

export default Profile