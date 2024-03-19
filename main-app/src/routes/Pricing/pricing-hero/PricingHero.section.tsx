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
            pt={{ xs: 10, md: 14 }}
            pb={{ xs: 5, md: 10 }}
            pr={{ xs, md }}
            pl={{ xs, md, lg }}
        >

            <Box
                maxWidth={{ xs: '100%', md: '40%', lg: '36%' }}
                sx={{
                    overflow: 'hidden',
                    borderRadius: 'xl',
                }}
            >
                <Card sx={{
                    p: 0,
                    overflow: 'hidden',
                    borderRadius: 'xl',
                }}
                >
                    <img src={heroImage} alt="hero image" />
                </Card>
            </Box>

            <Stack
                borderRadius='xl'
                p={2}
                pt={0}
                flexGrow='1'
                alignItems='center'
                justifyContent='center'
                spacing={{ xs: 2, md: 2, lg: 2 }}
            >
                <Typography
                    level='h1'
                    fontSize={{ xs: '9vw', sm: '7vw', md: '3vw' }}
                    pb={1}
                    fontWeight={800}
                >TIME IS MONEY
                </Typography>

                <Typography
                    level='h1'
                    pb={1}
                    fontWeight={800}
                    fontSize={{ xs: '7vw', sm: '4vw', md: '2vw' }}
                    sx={iconGradientStyles.scondaryPrimary}>SAVE BOTH WITH OUR AI WRITER
                </Typography>

                <Typography
                    mx='auto'
                    maxWidth={600}
                    fontWeight={500}
                    textColor='neutral.500'
                    px={{ lg: 4 }}
                >Say goodbye to hours of struggles! Create professional CV, tailored resume, personal cover letters in minutes, not days!
                </Typography>
            </Stack>
        </Box >
    )
}

export default PricingHero