import { Box, List, ListItem, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles"
import ProfileData from "../../../assets/icons/ProfileData.icon"
import WebLink from "../../../assets/icons/WebLink.icon"
import { useTheme } from "@mui/joy"
import GradientIconTextCard from "../../../components/gradientIcon-text-card/GradientIconTextCard.component"


const HomeAboutUs = () => {

    const theme = useTheme();
    const c = theme.vars.palette;

    // const paragraphs = [
    //     {
    //         content: "Create a profile with ease or just upload your old CV or resume. Our smart AI Profile assistant will extract all need information, check for errors, polish the information and fill in as much as possible fields on your profile page. Check and correct if needed the your profile info. Fill in all the required empty fields, if needed.",
    //         icon: <ProfileData startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
    //     },
    //     {
    //         content: "Supply AI Writer with a link pointing to the job position page /optional/. It will extract the information and tailor your CV and Resume skillset. You can interact with AI writer or edit manually the content till you have the perfect result.",
    //         icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
    //     },
    //     {
    //         content: "Provide AI writer with a link to 'companies culture' page /optional/. It will extract the information. Then personalize and finetune and you motivation letter in seconds. You can interact with AI writer or edit manually the content till you have the perfect result.",
    //         icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
    //     },
    // ]

    const paragraphs = [
        {
            title: 'AI Profile Assistant',
            content: "Log In or Sign Up. Navigate to profile. Upload an old CV or a resume... Booom! A professional polished profile only for few second! Just fill in the rest required fields, if needed.",
            icon: <ProfileData startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            title: 'Provide a job position link and...',
            content: "Wow, AI Writer tailored the resume with your best matching skills for less than an eye blink! Need some adjustments? Just explain or type it by youself!",
            icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            title: 'Another link for a tailored cover letter...?',
            content: "Of course! Provide AI Writer with company's `Culture` page link, contact person name... few seconds... Congratulations! You have personalized cover letter! Check and fine tune again.",
            icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
    ]
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'>

            <Typography
                level='h3'
                px={{ xs: 2, md: 0 }}
                fontSize={{ md: 'largeTitle' }}
                maxWidth='950px'
                textAlign='left'>
                We powerd
                <Typography sx={iconGradientStyles.scondaryPrimary}> AI Writer </Typography>
                with the latest
                <Typography sx={iconGradientStyles.scondaryPrimary}> cutting edge technologies. </Typography>
                It will help you to build professional resume and cover letters within minutes!</Typography>
            <Box
                pt={10}
                fontWeight={500}
                maxWidth='950px'
                textAlign='left'>

                <Stack
                    spacing={5}
                    bgcolor={'neutral.100'}
                    sx={{ fontSize: 'md', fontWeight: '500', color: 'neutral.600' }}>
                    {paragraphs.map((paragraph, index) => {
                        return (
                            <GradientIconTextCard key={index} paragraph={paragraph} />
                        )
                    }
                    )}
                </Stack>
            </Box>
        </Box>
    )
}

export default HomeAboutUs