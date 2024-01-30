import { Box, List, ListItem, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles"
import ProfileData from "../../../assets/icons/ProfileData.icon"
import WebLink from "../../../assets/icons/WebLink.icon"
import { useTheme } from "@mui/joy"
import GradientIconTextCard from "../../../components/gradientIcon-text-card/GradientIconTextCard.component"


const HomeAboutUs = () => {

    const theme = useTheme();
    const c = theme.vars.palette;


    const paragraphs = [
        {
            title: 'AI Profile assistant',
            content: "Log in or Sign up. Go to profile page. Upload an old CV or resume... Booom! A professional polished profile only for a couple of seconds! Fill in the rest required fields, only if needed.",
            icon: <ProfileData startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            title: 'Share the job ad link ',
            content: "Wow, AI Writer tailored the resume with your best matched skills for less than an eye blink! Need some adjustments? Just explain or type it by youself!",
            icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            title: "Drop then company's culture web link",
            content: "Maybe add a contact name too... few seconds... Congratulations! You have personalized cover letter! Check and fine tune again.",
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
                px={{ xs: 1, md: 2 }}
                fontSize={{ md: 'largeTitle' }}
                fontWeight='700'
                maxWidth='960px'
                textAlign='left'>
                <Typography sx={iconGradientStyles.scondaryPrimary}> AI Writer </Typography>
                powerd with the latest
                <Typography sx={iconGradientStyles.scondaryPrimary}> cutting edge technologies </Typography>
                is ready to help you! Compose professional cover letters and resumes within minutes!
            </Typography>

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