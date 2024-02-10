import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import signUp from '/assets/images/signup.jfif'
import StyledInput from "../../components/styled-input/StyledInput.component"
import UnderNavBar from '../../components/navbar/UnderNavBar.component';

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
    Stack,
    Snackbar,
} from "@mui/joy"

import GoogleButton from '../../components/buttons/google-button/GoogleButton.component';
import GoogleIcon from '../../assets/icons/Google.icon';
import DarkButton from '../../components/buttons/dark-button/DarkButton.component';
import { styleVariables } from "../../styles/styleVariables"

import { useUserContext } from '../../context/AuthContext';

import { getRedirectResult } from 'firebase/auth'

import { auth, createUserDocumentFromAuth } from '../../utils/firebase-utils';

type UserCredentials = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const SignUp = () => {

    const { xs, md, lg } = styleVariables.layoutPadding;
    const c = useTheme().palette;

    const navigate = useNavigate();
    const { user, signUpWithEmail, signInWithGooglePopUp, signInWithGoogleRedirect, logOut } = useUserContext()

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [userCredentials, setUserCredentials] = useState<UserCredentials | null>(null)

    const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials({ ...userCredentials, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleGoogleLogIn = async () => {
        setIsLoading(true)
        try {
            if (user) await logOut();

            if (isMobile) {
                const newUser = await signInWithGoogleRedirect();
            } else {
                const newUser = await signInWithGooglePopUp();
                setIsLoading(false)
                navigate('/')
            }

        } catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
            setIsSnackbarOpen(true)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { password, confirmPassword, email, firstName, lastName } = userCredentials;
        setIsLoading(true)

        try {
            if (password !== confirmPassword) {
                setErrorMessage('Passwords does not match!')
                setIsSnackbarOpen(true);
                setIsLoading(false);
                return
            }
            if (user) await logOut();
            const newUser = await signUpWithEmail(email, password, firstName, lastName)
            setUserCredentials({ email: '', password: '', firstName: '', lastName: '', confirmPassword: '' })
            setIsLoading(false)
            navigate('/');
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setErrorMessage('User already exist. Recover password?')
                setIsSnackbarOpen(true)
                setIsLoading(false)
            } else {
                setErrorMessage(error.message)
                setIsSnackbarOpen(true)
                setIsLoading(false)
            }
        }
    }

    return (
        <Box px={{ xs, md, lg }}>
            <UnderNavBar />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={{ xs: 'center', md: 'space-between' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                spacing={0}
                maxWidth='1200px'
                mx='auto'
            >
                <Card
                    sx={{
                        marginTop: { xs: 1, md: 6, xl: 9 },
                        marginBottom: { xs: 1, md: 0 },
                        width: { xs: '100%', md: '100%' },
                        maxWidth: { xs: '800px', md: '400px' },
                        aspectRatio: { xs: '1', sm: '1.5', md: '1' },
                        borderRadius: 'lg',
                        objectFit: 'cover',
                        flexGrow: 1
                    }}>
                    <CardCover>
                        <img src={signUp} alt="SignUp docs and avatar image" />
                    </CardCover>
                </Card>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <Grid
                        container
                        columns={12}
                        width={{ xs: '100%', md: '80%' }}
                        justifyContent='center'
                        spacing={1.4}
                        border={{ xs: '0px solid transparent', md: `1px solid ${c.neutral[300]}` }}
                        borderRadius='lg'
                        my={{ xs: 0, md: 2 }} ml={{ xs: 0, md: 'auto' }}
                        px={{ xs: 0, md: 4 }} py={2}
                    >
                        <Grid xs={12} md={12}>
                            <Typography
                                level='h2'
                                fontSize='mediumTitle'
                                fontWeight='700'
                                textAlign='left'
                                pb={3}
                            >SIGN UP
                            </Typography>
                        </Grid>

                        <GoogleButton
                            variant='outlined'
                            color='neutral'
                            disabled={isLoading}
                            sx={{ width: '100%', mb: 1 }}
                            onClick={handleGoogleLogIn}
                        ><GoogleIcon size={'2.5rem'} />Sign Up With Google
                        </GoogleButton>

                        <Typography
                            mt={1}
                            fontWeight='md'
                            level='body-sm'
                        >Already have an account?
                            <Link
                                px={1}
                                component="button"
                                onClick={() => { navigate('/login') }}>Log in
                            </Link>
                        </Typography>

                        <Divider sx={{ mt: 1.4, mb: .7, mx: 'auto', width: '80%' }}>
                            <Chip
                                variant="plain"
                                color="neutral"
                                size="md"
                                sx={{ bgcolor: 'transparent', color: c.neutral[400] }}>
                                <Typography level='body-xs' textColor='neutral.400'>
                                    Sign Up With Email
                                </Typography>
                            </Chip>
                        </Divider>

                        <Grid xs={12} md={6} px={0} pr={{ md: 1 }}>
                            <FormControl>
                                <FormLabel sx={{ mb: '8px' }}>First name</FormLabel>
                                <StyledInput
                                    required
                                    autoComplete='off'
                                    name='firstName'
                                    size='md'
                                    variant="outlined"
                                    color='neutral'
                                    onChange={(e) => handleCredentials(e)}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={6} px={0} pl={{ md: 1 }}>
                            <FormControl>
                                <FormLabel sx={{ mb: '8px' }}>Last name</FormLabel>
                                <StyledInput
                                    required
                                    autoComplete='off'
                                    name='lastName'
                                    size='md'
                                    color="neutral"
                                    onChange={(e) => handleCredentials(e)}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={12} px={0}>
                            <FormControl >
                                <FormLabel sx={{ mb: '8px' }}>Email</FormLabel>
                                <StyledInput
                                    required
                                    autoComplete='off'
                                    type='email'
                                    name='email'
                                    size='md'
                                    color="neutral"
                                    onChange={(e) => handleCredentials(e)}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={6} mb={2} px={0} pr={{ md: 1 }}>
                            <FormControl>
                                <FormLabel sx={{ mb: '8px' }}>Password</FormLabel>
                                <StyledInput
                                    required
                                    autoComplete='off'
                                    type='password'
                                    name='password'
                                    size='md'
                                    color="neutral"
                                    onChange={(e) => handleCredentials(e)}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={6} mb={2} px={0} pl={{ md: 1 }}>
                            <FormControl>
                                <FormLabel sx={{ mb: '8px' }}>Confirm password</FormLabel>
                                <StyledInput
                                    required
                                    autoComplete='off'
                                    type='password'
                                    name='confirmPassword'
                                    size='md'
                                    color="neutral"
                                    onChange={(e) => handleCredentials(e)}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={12}>
                            <DarkButton
                                color='neutral'
                                type='submit'
                                loading={isLoading}
                                sx={{ width: '100%', mt: '12px', py: 1.3 }}
                            >Create Account
                            </DarkButton>


                            <Typography
                                mt={2}
                                mx='auto'
                                level='body-xs'
                                maxWidth='320px'
                                lineHeight='.8rem'
                                sx={{ color: 'neutral.300' }}
                            >Ours Privacy Policy and Terms of Service apply
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </Stack>

            <Snackbar
                autoHideDuration={4000}
                open={isSnackbarOpen}
                variant='soft'
                color='danger'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                onClose={(event, reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    setIsSnackbarOpen(false);
                }}
                sx={{
                    border: `1.5px solid ${c.danger[300]}`,
                    bgcolor: c.danger[50],
                    borderRadius: 'md'
                }}
            >
                <Typography mx='auto' textColor='danger.600' level='body-sm'>
                    {errorMessage}
                </Typography>
            </Snackbar>
        </Box >
    )
}

export default SignUp