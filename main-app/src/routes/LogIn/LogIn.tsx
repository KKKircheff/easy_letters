
import logIn from '/assets/images/login1.jfif'
import InputLogInSignUp from '../../components/form-inputs/input-login-signup/InputLogInSignUp.component';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

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

import GoogleIcon from '../../assets/icons/Google.icon';

import { styleVariables } from "../../styles/styleVariables"
import GoogleButton from '../../components/buttons/google-button/GoogleButton.component';
import DarkButton from '../../components/buttons/dark-button/DarkButton.component';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth } from '../../utils/firebase-utils';

type UserCredentials = {
    email: string,
    password: string,
}

const LogIn = () => {

    const c = useTheme().palette
    const { xs, md, lg } = styleVariables.layoutPadding;

    const navigate = useNavigate();
    const { user, logInWithEmail, signInWithGooglePopUp, signInWithGoogleRedirect, logOut } = useUserContext()

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [userCredentials, setUserCredentials] = useState<UserCredentials | null>(null)


    const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials({ ...userCredentials, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            await logOut();
            await logInWithEmail(userCredentials.email, userCredentials.password)
            setUserCredentials({ email: '', password: '' })
            setIsLoading(false)
            navigate('/')
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                setErrorMessage('Wrong Email or Password')
                setIsSnackbarOpen(true)
                setIsLoading(false)
            } else {
                setErrorMessage(error.message)
                setIsSnackbarOpen(true)
                setIsLoading(false)
            }
        }
    }

    const handleGoogleLogIn = async () => {
        setIsLoading(true)
        try {
            if (user) await logOut();
            if (isMobile) {
                const newUser = await signInWithGoogleRedirect();
            } else {
                await signInWithGooglePopUp();
                setIsLoading(false)
                navigate('/')
            }

        } catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
            setIsSnackbarOpen(true)
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
                        marginTop: { xs: 1, md: 6, xl: 6 },
                        marginBottom: { xs: 1, md: 0 },
                        width: { xs: '100%', md: '70%', lg: '100%' },
                        maxWidth: { xs: '800px', md: '400px' },
                        aspectRatio: { xs: '1', sm: '1.5', md: '1' },
                        borderRadius: 'lg',
                        objectFit: 'cover',
                        flexGrow: 1
                    }}>
                    <CardCover>
                        <img src={logIn} alt="Login account avatar image" />
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
                        my={{ xs: 0, md: 2 }} ml={{ md: 'auto' }}
                        py={2} px={{ xs: 0, md: 4 }}
                        flexGrow={1}
                    >
                        <Grid xs={12} md={12} mb={2}>
                            <Typography
                                level='h2'
                                fontSize='mediumTitle'
                                fontWeight='700'
                                textAlign='left'
                                pb={1}
                            >LOG IN
                            </Typography>
                        </Grid>

                        <GoogleButton
                            variant='outlined'
                            color='neutral'
                            disabled={isLoading}
                            sx={{ width: '100%', mb: 1 }}
                            onClick={handleGoogleLogIn}
                        ><GoogleIcon size={'2.5rem'} />Log In With Google
                        </GoogleButton>

                        <Typography
                            mt={1}
                            fontWeight='md'
                            level='body-sm'
                        >Don't have an account?
                            <Link
                                px={1}
                                component="button"
                                onClick={() => { navigate('/signup') }}>Sign Up
                            </Link>
                        </Typography>

                        <Divider sx={{ mt: 1.4, mb: .7, mx: 'auto', width: '80%' }}>
                            <Chip
                                variant="plain"
                                color="neutral"
                                size="md"
                                sx={{ bgcolor: 'transparent', color: c.neutral[400] }}>
                                <Typography level='body-xs' textColor='neutral.400'>
                                    Log In With Email
                                </Typography>
                            </Chip>
                        </Divider>

                        <Grid xs={12} md={12} px={0} >
                            <FormControl >
                                <FormLabel sx={{ mb: '8px' }}>Email</FormLabel>
                                <InputLogInSignUp
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

                        <Grid xs={12} md={12} mb={2} px={0}>
                            <FormControl>
                                <FormLabel sx={{ mb: '8px' }}>Password</FormLabel>
                                <InputLogInSignUp
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

                        <Grid xs={12} md={12} px={0}>
                            <DarkButton
                                color='neutral'
                                type='submit'
                                loading={isLoading}
                                sx={{ width: '100%', mt: '12px', py: 1.3 }}
                            >Log In
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

export default LogIn