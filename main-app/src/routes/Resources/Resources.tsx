import { Box, Button, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import TextConfirmed from "../../assets/icons/TextConfirmed.icon"
import { useTheme } from "@mui/joy"
import Footer from "../../components/footer/Footer.component"
import ResourceHero from "./resource-hero/ResourceHero.section"
import ResourceGuidelines from "./resource-guidelines/ResourceGuidelines.section"
import { styleVariables } from "../../styles/styleVariables"

const Resources = () => {
    const c = useTheme().palette;
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box>
            <ResourceHero />
            <Box
                py={{ xs: 5, md: 10 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <ResourceGuidelines />
            </Box>

            <Typography level='h1' fontSize='largeTitle' py='200px'>
                <TextConfirmed
                    startColor={c.primary[500]}
                    middleColor={c.secondary[400]}
                    endColor={c.danger[200]} />
                <Typography level="title-lg" px={1}> Some nice gradient icons.</Typography>
            </Typography>
            <Footer />
        </Box>
    )
}

export default Resources