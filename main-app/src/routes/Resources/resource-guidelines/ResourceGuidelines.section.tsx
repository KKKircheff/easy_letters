import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles"

import ProfileData from "../../../assets/icons/ProfileData.icon"
import WebLink from "../../../assets/icons/WebLink.icon"
import WebLinkExternal from "../../../assets/icons/WebLinkExternal.icon"
import AIicon from '../../../assets/icons/AI.icon'
import { useTheme } from "@mui/joy"
import GradientListCard from "../../../components/gradient-list-card/GradientListCard.component"
import TextConfirmed from "../../../assets/icons/TextConfirmed.icon"


const ResourceGuidelines = () => {

    const theme = useTheme();
    const c = theme.vars.palette;


    const paragraphs = [
        {
            title: "What is Resume?",
            content: ["A resume is a concise document that provides a snapshot of your education, work experience, skills, and accomplishments.", "Typically, resumes are tailored to the specific job you are applying for and focus on highlighting relevant qualifications.", "It is usually limited to one or two pages.", "Includes sections such as contact information, summary or objective, education, work experience, skills, and sometimes additional sections like certifications or achievements."],
            icon: <TextConfirmed
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: "What is CV?",
            content: ["A CV (Curriculum Vitae) is a more detailed and comprehensive document than a resume.", "It is often used in academic and research fields or for international job applications.", "A CV may include a detailed list of publications, research projects, presentations, academic achievements, and more.", "Unlike a resume, a CV can be longer and is not typically tailored for each job application."],
            icon: <TextConfirmed
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xLargeTitle'
        },
        {
            title: 'What is Cover Letter?',
            content: ["A cover letter is a document that accompanies your resume or CV when applying for a job.", "It provides a platform to introduce yourself, explain why you are a suitable candidate, and highlight relevant skills and experiences.", "A cover letter allows you to customize your application for a specific job and organization", "It is usually one page and is structured with a greeting, introduction, body paragraphs, and a closing."],
            icon: <TextConfirmed
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: "What is Motivation Letter",
            content: ["A motivation letter is similar to a cover letter and is often used to accompanies CV.", "It focuses on explaining your motivation and enthusiasm for applying to a specific job or program.", "It might include personal qualities, career goals, and reasons for choosing the particular position or course.", "Like a cover letter, it is typically one page in length."],
            icon: <TextConfirmed
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: 'What to Send to an Employer?',
            content: ["Usual set of documents", "Resume & Cover Letter: Regular job application. Tailored to the specific job, highlighting relevant skills and experiences. Addressing why you are interested in the position, what you bring to the table, and why you are a good fit for the role and the company.", "CV & Motivation Letter: Academic or research positions, addressing your motivation, enthusiasm, and a genuine interest in the position."],
            icon: <TextConfirmed
                startColor={c.primary[500]}
                middleColor={c.secondary[400]}
                endColor={c.danger[200]} />,
            textSize: 'xxxLargeTitle'
        },
        {
            title: "Main guidelines when crafting your documents",
            content: ["Here our AI Writer covers you well!", "Carefully read the job posting to understand the employer's requirements.", "Customize your resume or CV and cover letter for each application.", "Keep the documents concise, well-organized, and free from errors.", "Follow any specific instructions provided by the employer in the job posting."],
            icon: <AIicon
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

            <Typography
                level='h2'
                fontSize={{ xs: 'smallTitle', md: 'largeTitle' }}
                fontWeight='700'
                px={{ xs: 0, md: 2 }}
                py={2}
                maxWidth='960px'
                textAlign='center'>
                {'Before you do a template choice and start tailoring your docs, '}

                <Typography
                    level='h2'
                    fontSize={{ xs: 'smallTitle', md: 'largeTitle' }}
                    sx={iconGradientStyles.scondaryPrimary}>
                    {' please read carefully '}
                </Typography>

                {"our major guidelines and keep them in mind."}
            </Typography>

            <Box
                pt={{ xs: 5, md: 10 }}
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
                                <GradientListCard key={index} paragraph={paragraph} />
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Box>
        </Box>
    )
}

export default ResourceGuidelines