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
                alignItems='center'
                spacing={{ xs: 0, md: 4 }}>

                <Grid xs={12} md={5} lg={5} pt={3}>
                    <Typography
                        fontSize={{ xs: 'xLargeTitle', lg: 'xxxLargeTitle' }}
                        textAlign={{ xs: 'center', md: 'right' }}
                        lineHeight={{ xs: '3rem', md: '3.5rem' }}
                        fontWeight='800'
                    >What are
                    </Typography>
                    <Stack
                        sx={iconGradientStyles.scondaryPrimary}
                        direction={{ xs: 'row', md: 'column' }}
                        flexWrap='wrap'
                        spacing={{ xs: '1rem', md: 0 }}
                        justifyContent={{ xs: 'center', md: 'right' }}
                        alignItems={{ xs: 'left' }} >
                        <Typography
                            alignSelf='right'
                            lineHeight={{ xs: '3rem', md: '3.5rem' }}
                            fontSize={{ xs: 'xLargeTitle', lg: 'xxxLargeTitle' }}
                            fontWeight='800'
                            textAlign={{ xs: 'center', md: 'right' }}
                        >Empowered
                        </Typography>

                        <Typography
                            fontSize={{ xs: 'xLargeTitle', lg: 'xxxLargeTitle' }}
                            textAlign={{ xs: 'center', md: 'right' }}
                            fontWeight='800'
                            lineHeight={{ xs: '3rem', md: '3.5rem' }}
                        >Key-Words?
                        </Typography>
                    </Stack>
                </Grid>

                <Grid xs={12} md={7} lg={7}>
                    <Typography level='h2' textAlign={{ xs: 'center', md: 'left' }} py={3} >
                        And how do we cover you?
                    </Typography>

                    <Typography level='title-md' textAlign='left' textColor='neutral.500'>
                        A lot of HR departments use smart algorithms for inital candidate selection. These algorithms search for specific words in the applicant's resumes and cover letters. These words we call 'empowered key-words'.
                    </Typography>

                    <Typography level='title-md' textAlign='left' textColor='neutral.500' pb={2}>
                        So we trained our AI Writer to include in the documents the proper key-words.'
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                columns={12}
                spacing={{ xs: 0, md: 4 }}
            >

                <Grid xs={12} md={5} lg={5} pb={2}>
                    <Typography
                        level='h2'
                        fontWeight='700'
                        textAlign={{ xs: 'center', md: 'right' }}
                    >Example:
                    </Typography>

                    <Typography
                        level='h2'
                        fontWeight='800'
                        textAlign={{ xs: 'center', md: 'right' }}
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
                                level='title-md'
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