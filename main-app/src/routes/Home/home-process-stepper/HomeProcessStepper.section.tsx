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
            title: 'Log into your profile',
            text: 'In case you are a registered user but your plan has expired get or still do not have a plan choose between Free, OneShot or Pro Active.',
            icon: <PermIdentityIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Profile Creator with AI',
            text: "Fill in all necessary profile fields. If you have an older resume or cover letter, just upload the file. Our AI will extract as much as possible information and fill in the necessary fields",
            icon: <AutoModeIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Time for fun! Go to AI Writer',
            text: "There on the top you will see option buttons to connect 'job position link' and 'company`s culture' page. Add them and click generate. The assisting AI Writer will go through all uploaded data till now. It will check towards the relevant job position key-words, use appropriate language and create a professional tailored resume and cover letter for you.",
            icon: <AddLinkIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Time for a careful check',
            text: 'Read the ready content. In case corrections needed tell AI writer what corrections you need or fill just correct the text by yourself. Do not forget at end to run AI error and grammar check',
            icon: <ChecklistIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Choose a template',
            text: "Easy Letters' web applications will save you money and time again! You do not have to pay for templates. Just choose some of ours 'Free' or 'Pro' templates and you have a brilliant final result.",
            icon: <FormatAlignLeftIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: true,
        },
        {
            title: 'Time to download',
            text: "Just click create and download and you'll have receive your resume and cover letter collection. ",
            icon: <CloudDownloadIcon sx={{ fontSize: '1.3rem' }} />,
            topDivider: true,
            bottomDivider: false,
        },
    ]

    return (
        <Stack spacing={8} direction={{ xs: 'column', md: 'row' }}>
            <Typography
                level='h2'
                fontSize={{ xs: 'xLargeTitle', md: 'xLargeTitle' }}
                fontWeight='800'
                minWidth={{ xs: '100px', md: '280px' }}
            >Seamless Process Flow</Typography>

            <Box maxWidth='600px'>
                {stepperData.map((stepper) => {
                    return (
                        <Stack key={stepper.title} direction='row' spacing={5} >

                            <Stack direction='column' gap={1}>
                                {stepper.topDivider && stepper.bottomDivider && <StyledDivider orientation="vertical" />}
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

                            <Stack flexGrow='1' textAlign='left' spacing={1}>
                                <Typography level='h2'>{stepper.title}</Typography>
                                <Typography
                                    level='title-md'
                                    fontSize={{ xs: 'md', md: 'lg' }}
                                    textColor={c.neutral[600]}
                                    pb={stepper.bottomDivider ? 3 : 0}
                                >{stepper.text}</Typography>
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