import { Box, List, ListItem, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles"
import ProfileData from "../../../assets/icons/ProfileData.icon"
import WebLink from "../../../assets/icons/WebLink.icon"
import { useTheme } from "@mui/joy"
import GradientIconTextCard from "../../../components/gradient-icon-text-card/GradientIconTextCard.component"


const HomeAboutUs = () => {

    const theme = useTheme();
    const c = theme.vars.palette;

    const paragraphs = [
        {
            content: "Create a profile with ease or just upload your old CV or resume. Our smart AI Profile assistant will extract all need information, check for errors, polish the information and fill in as much as possible fields on your profile page. Check and correct if needed the your profile info. Fill in all the required empty fields, if needed.",
            icon: <ProfileData startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            content: "Supply AI Writer with a link pointing to the job position page /optional/. It will extract the information and tailor your CV and Resume skillset. You can interact with AI writer or edit manually the content till you have the perfect result.",
            icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
        {
            content: "Provide AI writer with a link to 'companies culture' page /optional/. It will extract the information. Then personalize and finetune and you motivation letter in seconds. You can interact with AI writer or edit manually the content till you have the perfect result.",
            icon: <WebLink startColor={c.primary[500]} middleColor={c.secondary[400]} endColor={c.danger[200]} />
        },
    ]
    return (
        <Box py={10}
            display='flex'
            flexDirection='column'
            alignItems='center'>

            <Typography
                level='h3'
                fontSize={{ md: 'largeTitle' }}
                maxWidth='950px'
                textAlign='left'>
                We powerd our
                <Typography sx={iconGradientStyles.scondaryPrimary}> AI Writer </Typography>
                with the latest <Typography sx={iconGradientStyles.scondaryPrimary}>cutting edge technologies. </Typography>It will help you to build a professional resume and cover letter within minutes!</Typography>
            <Box
                pt={6}
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
            <Typography ></Typography>
        </Box>
    )
}

export default HomeAboutUs