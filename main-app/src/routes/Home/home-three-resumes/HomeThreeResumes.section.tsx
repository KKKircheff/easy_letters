import { Box, Stack, Typography } from "@mui/joy"
import ResumeHoverCard from "../../../components/resumes-hover-card/ResumesHoverCard.component"
import DarkButton from "../../../components/buttons/dark-button/DarkButton.component"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


const HomeThreeResumes = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                mx='auto'
                maxWidth='1300px'
                alignItems='center'
                spacing={8}>
                <Box width={{ xs: '90%', md: '40%' }}>
                    <ResumeHoverCard />
                </Box>

                <Box width={{ xs: '98%', md: '60%' }} >
                    <Typography
                        level='h2'
                        fontSize={{ xs: 'mediumTitle', md: 'xLargeTitle' }}
                        pb={2}
                        fontWeight='800'
                    >Only 3% of resumes make it past the first round. Be in TOP 3!
                    </Typography>

                    <Typography
                        level='title-md'
                        textColor='neutral.600'
                        fontSize={{ xs: 'md', md: 'lg' }}
                        textAlign={{ xs: 'left', md: 'center' }}
                        pt={3}
                    > Professional templates out of the box. No accident typos or grammar errors. Carefully built content. Every language expression is measured towards job's position  key-words. And much much more!</Typography>
                    <DarkButton
                        sx={{ mt: 6, px: 6, '&:hover': { bgcolor: 'transparent' } }}
                        onClick={() => navigate('/signup')}
                        endDecorator={<ArrowForwardIosIcon sx={{ fontSize: 'sm' }} />}
                    >Start now</DarkButton>
                </Box>
            </Stack>
        </Box>
    )
}

export default HomeThreeResumes