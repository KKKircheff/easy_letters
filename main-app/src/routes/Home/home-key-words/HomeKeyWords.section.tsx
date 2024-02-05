import {
    Box,
    Grid,
    Stack,
    Typography
} from "@mui/joy"

import { iconGradientStyles } from "../../../styles/iconGradientStyles"

const HomeKeyWords = () => {

    const keyWords = [
        'Worked',
        'Created',
        'Tested',
        'Helped',
        'Provided',
        'Designed',
        'Developed',
        'Assembled',
        'Produced',
        'Corrected',
        'Completed',
        'Implemented',
        'Managed',
        'Collaborated',
        'Maintained',
        'Formulated',
        'Agile',
        'Team'
    ]
    return (
        <Stack
            spacing={{ xs: 4, md: 1 }}
            direction={{ xs: 'column' }}>

            <Grid container
                columns={12}
                justifyContent='center'
                // alignItems='center'
                spacing={{ xs: 2, md: 4, lg: 8 }}>

                <Grid xs={12} md={5} lg={5} px={1}>
                    <Typography
                        sx={{ textWrap: 'balance', ...iconGradientStyles.scondaryPrimary, }}
                        level='h2'
                        fontSize={{ xs: 'largeTitle', md: 'largeTitle' }}
                        fontWeight='800'
                        textAlign={{ xs: 'center', md: 'left' }}
                    >{'Empowered Key-Words?'.toUpperCase()}
                    </Typography>
                </Grid>

                <Grid xs={12} md={7} lg={7}>
                    <Typography
                        level='h2'
                        fontSize={{ xs: 'largeTitle', md: 'largeTitle' }}
                        fontWeight='800'
                        pb={3}
                        textAlign={{ xs: 'center', md: 'left' }}
                    >{'And how do we cover you?'.toUpperCase()}
                    </Typography>

                    <Typography
                        textAlign='left'
                        textColor='neutral.500'
                        fontWeight='500'
                        pb={2}>
                        A lot of HR departments use smart algorithms for inital candidate selection. These algorithms search for specific words amoung the applicant's resumes and cover letters. These words we call 'empowered key-words'. Our AI Writer remixes application's topic specific key-words in your letters.'
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                columns={12}
                spacing={{ xs: 0, md: 4, lg: 8 }}
            >

                <Grid xs={12} md={5} lg={5} px={1} pb={2}>
                    <Typography
                        // level='h2'
                        // fontSize={{ xs: 'largeTitle', md: 'largeTitle' }}
                        // fontWeight='800'
                        level='h2'
                        fontSize='mediumTitle'
                        fontWeight='700'
                        textColor='neutral.800'
                        textAlign={{ xs: 'center', md: 'left' }}
                    >Example
                    </Typography>

                    <Typography
                        // level='h2'
                        // fontSize={{ xs: 'largeTitle', md: 'largeTitle' }}
                        // fontWeight='800'
                        level='h2'
                        fontSize='mediumTitle'
                        fontWeight='700'
                        textColor='neutral.500'
                        textAlign={{ xs: 'center', md: 'left' }}
                    >Software Engineer
                    </Typography>
                </Grid>

                <Grid
                    xs={12} md={7} lg={7}
                >
                    <Stack
                        direction='row'
                        flexWrap='wrap'
                        py={.6}
                        justifyContent={{ xs: 'center', md: 'left' }}
                    >
                        {keyWords.map((keyWord, index) =>
                            <Typography
                                key={index}
                                fontWeight='500'
                                textAlign='left'
                                textColor='primary.600'>
                                {keyWord}

                                {(index < keyWords.length - 1) && <Typography
                                    fontWeight='100'
                                    textColor='neutral.400'
                                    px={1}
                                >|</Typography>}
                            </Typography>
                        )}
                    </Stack>
                </Grid>

            </Grid>

        </Stack >
    )
}

export default HomeKeyWords