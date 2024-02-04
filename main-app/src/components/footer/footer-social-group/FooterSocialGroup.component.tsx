import { Stack, StepIndicator, Typography } from '@mui/joy'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom";


const FooterSocialGroup = () => {
    const navigate = useNavigate();

    return (
        <Stack direction='row' spacing={{ xs: 1, sm: 2 }} pt={10} alignItems='center'>
            <Typography
                level='body-xs'
                textColor='neutral.300'
                width='90px'
                textAlign='left'
                fontWeight='600'>
                FOLLOW US:
            </Typography>
            <StepIndicator sx={{ bgcolor: 'neutral.800', width: '2.4rem', height: '2.4rem' }}>
                <FacebookIcon sx={{ color: 'neutral.50', fontSize: '1.4rem', cursor: 'pointer' }} onClick={() => navigate('/')} />
            </StepIndicator>
            <StepIndicator sx={{ bgcolor: 'neutral.800', width: '2.4rem', height: '2.4rem' }}>
                <InstagramIcon sx={{ color: 'neutral.50', fontSize: '1.4rem', cursor: 'pointer' }} onClick={() => navigate('/')} />
            </StepIndicator>
            <StepIndicator sx={{ bgcolor: 'neutral.800', width: '2.4rem', height: '2.4rem' }}>
                <LinkedInIcon sx={{ color: 'neutral.50', fontSize: '1.4rem', cursor: 'pointer' }} onClick={() => navigate('/')} />
            </StepIndicator>
        </Stack>
    )
}

export default FooterSocialGroup