import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from 'uuid';

import {
    Box,
    Button,
    Stack,
    useTheme
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import ProfileSidebar from "./ProfileSidebar.section";
import ProfileGeneral from "./ProfileGeneral.section";
import Footer from "../../components/footer/Footer.component";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UndoIcon from '@mui/icons-material/Undo';
import CheckIcon from '@mui/icons-material/Check';

import useScreenWidth from '../../hooks/useScreenWidth';
import { styleVariables } from '../../styles/styleVariables';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'

import { UserProfile } from '../../data/userProfileTypes'
export type SectionsToRender = keyof UserProfile

const Profile = () => {
    const c = useTheme().palette
    const f = useTheme().fontSize

    const { xs, md, lg } = styleVariables.layoutPadding;

    const { userProfile, updateUserProfile } = useUserContext()
    const { register, handleSubmit, control, formState: { errors } } = useForm<UserProfile>();

    const totalWidth = useScreenWidth()

    const wideWidth = 224
    const compactWidth = 70

    const restWideWidth = totalWidth - compactWidth

    const isWide = totalWidth > 600;


    const [isSidebarWide, setIsSidebarWide] = useState(totalWidth > 900)
    const [sectionToRender, setSectionToRender] = useState<SectionsToRender>('general');

    const handleUpdate = async (data: UserProfile) => {
        try {
            await updateUserProfile(data);
            alert('Updated!')
        } catch (error) {
            alert(error)
        }
    };



    return (
        <Stack
            direction='row'
            position='sticky'
            top={0}
            left={0}
            minHeight='100vh'
            bgcolor='neutral.700'
        >
            <Stack
                zIndex={1}
                role='sidebar'
                alignItems='flex-start'
                width={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
                minWidth={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
                position={{ xs: 'fixed', sm: 'sticky' }}
                maxHeight={{ xs: '100vh', md: '98vh' }}
                top={0}
                left={0}
                pl={1.1}
                bgcolor={c.neutral[700]}
                sx={{
                    // backgroundImage: `linear-gradient(90deg ,${c.primary[700]},${c.primary[500]} )`,
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

                <form onSubmit={handleSubmit(handleUpdate)}>
                    <Box px={{ md: xs, lg: md }}>
                        <ProfileGeneral />
                    </Box>

                    <Stack
                        direction='column'
                        spacing={2}
                        py={5}
                        pb={10}
                        px={{ xs: '3vw', sm: md, md: xs, lg: md }}
                    >

                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            mx='auto'
                            px={{ md: 1 }}
                        >
                            <Button
                                variant='outlined'
                                color='neutral'
                                type='button'
                                sx={{
                                    borderWidth: '2px',
                                    borderColor: c.neutral[300],
                                    color: c.neutral[400],
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
                                Previous
                            </Button>

                            <Button
                                // onClick={handleUpdate}
                                variant='outlined'
                                color='neutral'
                                type='button'
                                sx={{
                                    borderWidth: '2px',
                                    borderColor: c.neutral[300],
                                    color: c.neutral[400],
                                    // fontWeight: 600,
                                    paddingRight: 1,
                                    paddingY: .3,
                                }}
                                endDecorator={<ChevronRightIcon sx={{
                                    color: c.neutral[100],
                                    fontSize: f.mediumTitle,
                                    bgcolor: c.neutral[400],
                                    borderColor: c.neutral[200],
                                    borderRadius: 'lg',
                                }} />}
                            >
                                Next
                            </Button>
                        </Stack>

                        <Stack
                            direction='row-reverse'
                            justifyContent='center'
                            mx='auto'
                            px={{ md: 1 }}
                            spacing={{ xs: 2 }}>

                            <Button
                                color='primary'
                                variant='solid'
                                type='submit'
                                // onClick={handleUpdate}
                                sx={{
                                    justifyContent: 'flex-start',
                                    paddingLeft: 1,
                                    paddingY: .2,
                                    paddingRight: { xs: 2, sm: 2.5 },
                                    bgcolor: c.neutral[50],
                                    color: c.primary[500],
                                    border: `2px solid ${c.primary[400]}`,
                                    '&:hover': {
                                        color: c.neutral[50],
                                        bgcolor: c.primary[500],
                                    }

                                }}
                                startDecorator={<CheckIcon sx={{
                                    p: .2,
                                    border: `2px solid ${c.primary[300]}`,
                                    bgcolor: c.primary[500],
                                    color: c.neutral[50]!,
                                    fontSize: f.mediumTitle,
                                    fontWeight: 800,
                                    borderRadius: 'lg',
                                }} />}

                            >{isWide ? 'Update profile' : 'Update'}
                            </Button>


                            <Button
                                color='warning'
                                type='button'
                                // onClick={handleRevertProfileChanges}
                                sx={{
                                    justifyContent: 'flex-start',
                                    border: `2px solid ${c.neutral[300]}`,
                                    paddingLeft: 1,
                                    paddingRight: { xs: 2, sm: 2.5 },
                                    paddingY: .2,
                                    bgcolor: c.neutral[50],
                                    color: c.neutral[400],
                                    '&:hover': {
                                        border: `2px solid ${c.warning[400]}`,
                                        color: c.neutral[50],
                                        bgcolor: c.warning[500],
                                    }

                                }}
                                startDecorator={<UndoIcon sx={{
                                    p: .2,
                                    border: `2px solid ${c.warning[100]}`,
                                    bgcolor: c.warning[500],
                                    color: c.neutral[50],
                                    fontSize: f.mediumTitle,
                                    fontWeight: 700,
                                    borderRadius: 'lg',
                                }} />}
                            >{isWide ? 'Revert changes' : 'Undo'}
                            </Button>
                        </Stack>

                    </Stack>
                </form>
                <DevTool control={control} />
                <Footer />
            </Stack>
        </Stack >
    )
}

export default Profile