import { Box, Typography } from "@mui/joy"
import { iconGradientStyles } from "../../../styles/iconGradientStyles";
import { styleVariables } from "../../../styles/styleVariables";

const PricingHero = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={1}
            py={8}
            px={{ xs, md, lg }}
        >
            <Typography level='h1' fontSize='xl5' fontWeight='800'>Time Is Money!</Typography>
            <Typography
                level='h1'
                sx={iconGradientStyles.scondaryPrimary}
            >Save Both With Our AI Writer</Typography>
            <Typography
                level='title-md'
                py={2}
            >Say goodbye to hours of struggles - create tailored CV, resume or motivation letters in minutes, not days.</Typography>
        </Box>
    )
}

export default PricingHero