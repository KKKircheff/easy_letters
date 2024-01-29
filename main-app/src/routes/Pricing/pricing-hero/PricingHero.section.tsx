import { Box, Button, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles";
import { styleVariables } from "../../../styles/styleVariables";

const PricingHero = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={2}
            py={8}
            px={{ xs, md, lg }}
        >
            <Typography
                level='h1'
                fontSize={{ xs: 'xLargeTitle', md: 'xxxLargeTitle' }}
                fontWeight='800'>Time Is Money!
            </Typography>

            <Typography
                level='h1'
                fontSize={{ xs: 'largeTitle', md: 'xxLargeTitle' }}
                sx={iconGradientStyles.scondaryPrimary}>Save Both With Our AI Writer
            </Typography>

            <Typography
                level='title-md'
                py={2}
                mx='auto'
                maxWidth='600px'
                textColor='neutral.700'
            >Say goodbye to hours of struggles! Create professional CV, tailored resume or personalized motivation letters in minutes, not days!
            </Typography>

        </Box>
    )
}

export default PricingHero