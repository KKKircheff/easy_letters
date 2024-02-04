import { AspectRatio, Box, Button, Card, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles";
import { styleVariables } from "../../../styles/styleVariables";
import heroImage from '/assets/images/resourceHero.jfif'


const ResourceHero = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={{ xs: 5, md: 2 }}
            pb={{ xs: 5, md: 10 }}
            pt={{ xs: 10, md: 14 }}
            pr={{ xs, md }}
            pl={{ xs, md: md }}
        >

            <Box maxWidth={{ xs: '100%', md: '40%', lg: '36%' }}
                sx={{
                    transform: { xs: 'skew(0)', md: 'skew(-4deg, 0)' },
                    overflow: 'hidden',
                    borderRadius: 'xl',
                }} >
                <Card sx={{
                    p: 0,
                    overflow: 'hidden',
                    borderRadius: 'xl',
                    transform: { xs: 'skew(0)', md: 'skew(+4deg, 0) scale(1.07)' },
                }}>
                    <img src={heroImage} alt="hero image" />
                </Card>
            </Box>

            <Stack
                borderRadius='xl'
                p={2}
                py={3}
                flexGrow='1'
                alignItems='center'
                justifyContent='center'
                spacing={{ xs: 2, md: 2, lg: 2 }}
            >
                <Typography
                    level='h1'
                    fontSize={{ xs: 'largeTitle', md: 'xxLargeTitle' }}
                    fontWeight='800'>Templates
                </Typography>


                <Typography
                    level='h2'
                    pb={1}
                    fontWeight='800'
                    fontSize={{ xs: 'mediumTitle', md: 'xLargeTitle' }}
                    sx={iconGradientStyles.scondaryPrimary}>And More Tips & Guidelines
                </Typography>

                <Typography
                    mx='auto'
                    maxWidth='500px'
                    textColor='neutral.500'
                    fontWeight='500'
                    px={{ lg: 4 }}
                >Quick and mart Solutions. Instant impact, minimal time. Your shortcut to a standout application!
                </Typography>
            </Stack>
        </Box>
    )
}

export default ResourceHero