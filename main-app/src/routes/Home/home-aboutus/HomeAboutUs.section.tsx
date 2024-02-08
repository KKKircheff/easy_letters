import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles"

import ProfileData from "../../../assets/icons/ProfileData.icon"
import WebLink from "../../../assets/icons/WebLink.icon"
import WebLinkExternal from "../../../assets/icons/WebLinkExternal.icon"
import AIicon from '../../../assets/icons/AI.icon'
import { useTheme } from "@mui/joy"
import GradientIconTextCard from "../../../components/gradientIcon-text-card/GradientIconTextCard.component"


const HomeAboutUs = () => {

    const theme = useTheme();
    const c = theme.vars.palette;


    const paragraphs = [
        {
            title: 'Advanced AI Algorithms',
            content: "Under the hood Easy Letters' smart algorithms use OpenAI's GPT4, Google Gemini Pro and Perplexity AI Large Language Models. Then our software engineers and linguists fine-tune them for best results.",
            icon: <AIicon
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: 'Smart Profiles With AI',
            content: "Log in or Sign up. Go to profile page. Upload an old CV or resume... Booom! A professional polished profile only for a couple of seconds! Fill in the rest required fields, only if needed.",
            icon: <ProfileData
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xLargeTitle'
        },
        {
            title: 'Drop The Job Position Link ',
            content: "Wow, AI Writer tailored the resume with your best matched skills for less than an eye blink! Needs some adjustments? Just explain to the assistant or type it by yourself!",
            icon: <WebLinkExternal
                startColor={c.primary[500]}
                middleColor={c.secondary[400]
                } endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: "Share Employer's Values Web Page",
            content: "And add a contact name too... few seconds... Congratulations! You have personalized cover letter! Check and fine tune again.",
            icon: <WebLink
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
    ]

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'>

            <Box
                borderRadius='md'
                bgcolor='white'
                width='100%'
                maxWidth='950px'
                mb={4}
                py={{ xs: 3, md: 4 }}
                px={{ xs: 1.7, md: 4 }}
            >
                <Typography
                    level='h2'
                    fontSize={{ xs: 'smallTitle', sm: 'mediumTitle', md: 'largeTitle' }}
                    fontWeight='700'
                    px={{ xs: 0, md: 0 }}
                    mx='auto'
                    maxWidth='900px'
                    textAlign='center'>
                    {'Empowered with the latest'}
                    <Typography
                        level='h2'
                        fontSize={{ xs: 'smallTitle', sm: 'mediumTitle', md: 'largeTitle' }}
                        sx={iconGradientStyles.scondaryPrimary}>
                        {' cutting edge technologies '}
                    </Typography>
                    {"Easy Letters AI assistant is here to help you!"}
                </Typography>
            </Box>

            <Box
                borderRadius='md'
                bgcolor='white'
                width='100%'
                maxWidth='950px'
                py={{ xs: 3, md: 4 }}
                px={{ xs: 1.8, md: 4 }}
            >
                <Typography
                    level='h2'
                    fontSize={{ xs: 'smallTitle', sm: 'mediumTitle', md: 'largeTitle' }}
                    fontWeight='700'
                    px={{ xs: 0, md: 0 }}
                    maxWidth='800px'
                    mx='auto'
                    textAlign='center'>
                    {'Compose professional cover letters and resumes within minutes!'}
                </Typography>
            </Box>

            <Box
                pt={{ xs: 6, md: 8 }}
                fontWeight={500}
                maxWidth='950px'
                textAlign='left'>

                <Grid container
                    columns={12}
                    spacing={5}
                    bgcolor={'neutral.100'}
                    direction='row'
                    justifyContent='center'
                    sx={{ fontSize: 'md', fontWeight: '500', color: 'neutral.600' }}>
                    {paragraphs.map((paragraph, index) => {
                        return (
                            <Grid key={index} xs={12} md={6}>
                                <GradientIconTextCard key={index} paragraph={paragraph} />
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Box>
        </Box>
    )
}

export default HomeAboutUs