import { AspectRatio, Box, Button, Card, Stack, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles";
import { styleVariables } from "../../../styles/styleVariables";
import heroImage from '/assets/images/priceHero.jfif'


const PricingHero = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={{ xs: 5, md: 2 }}
            pb={{ xs: 5, md: 10 }}
            pt={{ xs: 2, md: 5 }}
            px={{ xs, md, lg }}
        >

            <Box maxWidth={{ xs: '100%', md: '40%', lg: '33%' }} >
                <Card sx={{ p: 0, overflow: 'hidden', borderRadius: 'xl' }}>
                    <img src={heroImage} alt="hero image" />
                </Card>
            </Box>

            <Stack
                bgcolor='neutral.200'
                borderRadius='xl'
                p={2}
                py={3}
                flexGrow='1'
                alignItems='center'
                justifyContent='center'
                spacing={{ xs: 2, md: 2, lg: 3 }}
            >
                <Typography
                    level='h1'
                    fontSize={{ xs: 'largeTitle', md: 'xxLargeTitle' }}
                    fontWeight='800'>Time Is Money!
                </Typography>

                <Typography
                    level='h1'
                    lineHeight={{ md: '3rem' }}
                    fontSize={{ xs: 'mediumTitle', md: 'xLargeTitle' }}
                    sx={iconGradientStyles.scondaryPrimary}>Save Both With Our AI Writer
                </Typography>

                <Typography
                    level={'title-sm'}
                    fontSize={{ md: 'large' }}
                    mx='auto'
                    maxWidth='600px'
                    textColor='neutral.700'
                    px={{ lg: 4 }}
                >Say goodbye to hours of struggles! Create professional CV, tailored resume, personal cover letters in minutes, not days!
                </Typography>
            </Stack>
        </Box>
    )
}

export default PricingHero