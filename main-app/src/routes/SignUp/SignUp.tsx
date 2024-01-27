
import signUp from '/assets/images/signup.jfif'
import StyledInput from "../../components/styled-input/StyledInput.component"
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme';

import {
    Box,
    Button,
    Card,
    CardCover,
    FormControl,
    FormLabel,
    Grid,
    Typography,
    Link,
} from "@mui/joy"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { styleVariables } from "../../styles/styleVariables"

const SignUp = () => {
    const navigate = useNavigate();
    const { xs, sm, md, lg, xl } = styleVariables.layoutPadding;
    return (
        <Box>
            <Grid
                container
                justifyContent={{ xs: 'center', md: 'space-between' }}
                padding={{ xs: `20px ${0}`, md: `11vh ${xs}`, lg: `12vh ${xs}`, xl: `12vh ${0}` }}
                spacing={1}
                flexGrow='1'
                maxWidth='1000px'
                mx='auto'
            >
                <Grid xs={12} md={5} mt={{ xs: 0, md: '100px' }}>
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
                    container py={6}
                    xs={12} md={6}
                    justifyContent='center' spacing={2}>

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

                        <Button
                            color='neutral'
                            sx={{
                                width: '100%',
                                bgcolor: 'neutral.800',
                                borderRadius: theme.vars.radius.full,
                                px: 4, py: 1.8,
                                fontSize: { xs: 'md' },
                                mt: '10px'
                            }}
                            onClick={() => navigate('/profile')}
                            endDecorator={<ArrowForwardIosIcon sx={{ color: 'currentcolor', fontSize: 'md' }} />}>Create Account
                        </Button>
                        <Button
                            variant='soft'
                            color='danger'
                            sx={{
                                width: '100%',
                                borderRadius: theme.vars.radius.full,
                                px: 4, py: 1.8,
                                fontSize: { xs: 'md' },
                                mt: '15px',
                                color: theme.vars.palette.danger[600]
                            }}
                            onClick={() => navigate('/profile')}
                            endDecorator={<ArrowForwardIosIcon sx={{ color: 'currentcolor', fontSize: 'md' }} />}>Register With Google
                        </Button>

                        <Typography mt='16px' fontWeight='md' level='body-sm'>Already have an account?
                            <Link
                                px={1}
                                component="button"
                                onClick={() => { navigate('/home') }}>Log in
                            </Link>
                        </Typography>

                        <Typography
                            mt='10px'
                            mx='auto'
                            level='body-xs'
                            maxWidth='320px'
                            sx={{ color: 'neutral.400' }}
                        >This site is protected by reCAPTCHA and Google Privacy Policy and Terms of Service apply. </Typography>

                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default SignUp