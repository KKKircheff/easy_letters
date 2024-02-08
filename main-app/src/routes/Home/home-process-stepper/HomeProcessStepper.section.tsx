import {
    Box,
    Divider,
    Stack,
    StepIndicator,
    Typography,
    styled,
    useTheme
} from "@mui/joy"

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import LoginIcon from '@mui/icons-material/Login';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { ReactNode } from "react";

export type StepperDataProps = {
    title: string,
    text: string,
    icon: ReactNode,
    topDivider: boolean,
    bottomDivider: boolean
}[]

const HomeProcessStepper = () => {
    const c = useTheme().palette;

    const StyledDivider = styled(Divider)(({ theme }) => ({
        backgroundColor: c.primary[500],
        flexGrow: 1,
        margin: '0 auto'
    }))

    const stepperData: StepperDataProps = [
        {
            title: 'Sign up and choose plan',
            text: 'In case you are not a registered sign up for free. Then choose between Free, OneShot or Pro Active.',
            icon: <LoginIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: false,
            bottomDivider: true,
        },
        {
            title: 'Log into your account',
            text: 'In case you are a registered user but your plan has expired get or still do not have a plan choose between Free, OneShot or Pro Active.',
            icon: <PermIdentityIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Profile completion',
            text: "Fill in all necessary profile fields. If you have an older resume or cover letter, just upload the file. The AI Profile assistant will extract as much as possible information and fill in the necessary fields",
            icon: <AutoModeIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Time for fun! Go to AI Writer',
            text: "On the top of AI Writer page you will see option buttons to connect 'job ad position link' and 'company`s culture' page. Add them and click generate. The assisting AI Writer will go through all uploaded data till now. It will check towards the relevant job position key-words, use appropriate language and create a professional tailored resume and cover letter for you.",
            icon: <AddLinkIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Then carefully check',
            text: 'Read the ready content. In case fine tuning is needed tell AI writer what corrections you want. Or refactor by yourself if you prefer. Do not forget at end to run AI error and grammar check!',
            icon: <ChecklistIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Choose a template',
            text: "Easy Letters' will save you money and time again! Just choose one from our 'Free' or designed 'Pro' templates. Now you have a brilliant final result.",
            icon: <FormatAlignLeftIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Time to export',
            text: "Just click create and download and you'll receive your resume and cover letter collection in .docx or pdf. ",
            icon: <CloudDownloadIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: false,
        },
    ]

    return (
        <Stack spacing={8} direction={{ xs: 'column', md: 'row' }}>
            <Typography
                level='h2'
                fontSize={{ xs: 'mediumTitle', md: 'largeTitle' }}
                fontWeight='800'
                minWidth={{ xs: '100px', md: '280px' }}
                textAlign={{ xs: 'center', md: 'right' }}
            >{'Seamless Process Flow'.toUpperCase()}</Typography>

            <Box maxWidth='600px'>
                {stepperData.map((stepper) => {
                    return (
                        <Stack key={stepper.title} direction='row' spacing={{ xs: 2, md: 8 }} >

                            <Stack direction='column' gap={1}>
                                {/* {stepper.topDivider && stepper.bottomDivider && <StyledDivider orientation="vertical" />} */}
                                <StepIndicator variant="solid" color="primary"
                                    sx={{
                                        background: `linear-gradient(90deg ,${c.secondary[400]}, ${c.primary[500]} )`!,
                                        width: '40px',
                                        height: '40px',
                                    }}>
                                    {stepper.icon}
                                </StepIndicator>
                                {stepper.bottomDivider && <StyledDivider orientation="vertical" />}
                            </Stack>

                            <Stack flexGrow='1' textAlign='left' spacing={2}>
                                <Typography
                                    // level='h2'
                                    // fontSize={{ xs: 'mediumTitle', md: 'largeTitle' }}
                                    // fontWeight='800'
                                    level='h2'
                                    fontSize='smallTitle'
                                    fontWeight='700'
                                    pt={.5}
                                >{stepper.title.toUpperCase()}
                                </Typography>

                                <Typography
                                    textAlign='left'
                                    textColor='neutral.500'
                                    fontWeight='500'
                                    pb={stepper.bottomDivider ? 8 : 0}
                                >{stepper.text}
                                </Typography>
                            </Stack>
                        </Stack>

                    )
                })
                }
            </Box>

        </Stack >
    )
}

export default HomeProcessStepper