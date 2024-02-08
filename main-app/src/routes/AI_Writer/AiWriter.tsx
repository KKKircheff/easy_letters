import { Box, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import Footer from "../../components/footer/Footer.component"

const AiWriter = () => {
    return (
        <Box>
            <UnderNavBar />
            <Typography level='h2' >AI Writer</Typography>
            <Footer />
        </Box>
    )
}

export default AiWriter