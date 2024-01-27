
import signUp from '/assets/images/signup.jfif'
import StyledInput from "../../components/styled-input/StyledInput.component"
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Card,
    CardCover,
    FormControl,
    FormLabel,
    Grid,
    Typography,
    Link,
    useTheme,
    Divider,
    Chip,
} from "@mui/joy"

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GoogleIcon from '../../assets/icons/Google.icon';

import { styleVariables } from "../../styles/styleVariables"
import GoogleButton from '../../components/buttons/google-button/GoogleButton.component';
import DarkButton from '../../components/buttons/dark-button/DarkButton.component';

const SignUp = () => {
    const navigate = useNavigate();
    const { xs, md } = styleVariables.layoutPadding;

    const theme = useTheme();
    const c = theme.vars.palette

    return (
        <Box>
            <Grid
                container
                justifyContent={{ xs: 'center', md: 'space-between' }}
                padding={{ xs: `20px ${0}`, md: `11vh ${md}`, lg: `12vh ${xs}`, xl: `12vh ${0}` }}
                spacing={1}
                flexGrow='1'
                maxWidth='1200px'
                mx='auto'
            >
                <Grid xs={12} md={5} xl={4} mt={{ xs: 0, md: '100px' }}>
                    <Card
                        sx={{
                            mx: 'auto',
                            width: { xs: '80%', md: '100%' },
                            maxWidth: { xs: '800px', md: '600px' },
                            aspectRatio: { xs: '1', sm: '1.5', md: '1' },
                            borderRadius: 'lg',
                            objectFit: 'cover',
                        }}>
                        <CardCover>
                            <img src={signUp} alt="SignUp docs and avatar image" />
                        </CardCover>
                    </Card>
                </Grid>

                <Grid
                    container
                    xs={12} md={6} xl={6}
                    justifyContent='center' spacing={1}
                    border={{ xs: '0px solid transparent', md: `1px solid ${c.neutral[300]}` }}
                    borderRadius='lg'
                    my={6} px={2} py={2}
                >

                    <Grid xs={10} md={12}>
                        <Typography level='h2' textAlign='left'>Sign Up</Typography>
                    </Grid>

                    <Grid xs={10} md={6}>
                        <FormControl>
                            <FormLabel sx={{ fontWeight: 'bold', mb: '8px' }}>First name</FormLabel>
                            <StyledInput size='lg' variant="outlined" color='neutral' />
                        </FormControl>
                    </Grid>

                    <Grid xs={10} md={6}>
                        <FormControl>
                            <FormLabel sx={{ fontWeight: 'bold', mb: '8px' }}>Family name</FormLabel>
                            <StyledInput size='lg' color="neutral" />
                        </FormControl>
                    </Grid>

                    <Grid xs={10} md={12}>
                        <FormControl >
                            <FormLabel sx={{ fontWeight: 'bold', mb: '8px' }}>Email</FormLabel>
                            <StyledInput size='lg' color="neutral" />
                        </FormControl>
                    </Grid>

                    <Grid xs={10} md={12}>
                        <FormControl>
                            <FormLabel sx={{ fontWeight: 'bold', mb: '8px' }}>Password</FormLabel>
                            <StyledInput size='lg' color="neutral" />
                        </FormControl>
                    </Grid>

                    <Grid xs={10} md={12}>
                        <DarkButton
                            color='neutral'
                            sx={{ width: '100%', mt: '10px' }}
                            onClick={() => navigate('/profile')}>Create Account
                        </DarkButton>

                        <Divider sx={{ mt: '6px', mx: 'auto', width: '80%' }}>
                            <Chip
                                variant="plain" color="neutral" size="md"
                                sx={{ bgcolor: 'transparent', color: c.neutral[400] }}>
                                or
                            </Chip>
                        </Divider>

                        <GoogleButton
                            variant='outlined'
                            color='neutral'
                            sx={{ width: '100%', mt: '6px' }}
                            onClick={() => navigate('/profile')}
                            startDecorator={<GoogleIcon size={'2.5rem'} />}>Sign Up With Google
                        </GoogleButton>

                        <Typography mt='16px' fontWeight='md' level='body-sm'>Already have an account?
                            <Link
                                px={1}
                                component="button"
                                onClick={() => { navigate('/login') }}>Log in
                            </Link>
                        </Typography>

                        <Typography
                            mt='8px'
                            mx='auto'
                            level='body-xs'
                            maxWidth='320px'
                            lineHeight='.8rem'
                            sx={{ color: 'neutral.300' }}
                        >This site is protected by reCAPTCHA and Google Privacy Policy and Terms of Service apply. </Typography>

                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default SignUp