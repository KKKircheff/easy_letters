import { Box, Button, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import TextConfirmed from "../../assets/icons/TextConfirmed.icon"
import { useTheme } from "@mui/joy"

const Resources = () => {
    const theme = useTheme();
    const c = theme.vars.palette;
    return (
        <Box>
            <UnderNavBar />
            <Typography level='h1' fontSize='xxLargeTitle'>Resources</Typography>

            <Typography level='h1' fontSize='largeTitle' py='200px'>
                <TextConfirmed
                    startColor={c.primary[500]}
                    middleColor={c.secondary[400]}
                    endColor={c.danger[200]} />
                <Typography level="title-lg" px={1}> Some nice gradient icons.</Typography>
            </Typography>

            {/* <Button variant="solid" sx={{ border: '2px solid' }} color="danger"> Danger</Button>
            <Button variant="solid" sx={{ border: '2px solid' }} color="warning"> Warning</Button>
            <Button variant="solid" sx={{ border: '2px solid' }} color="primary"> Primary</Button>
            <Button variant="solid" sx={{ border: '2px solid' }} color="secondary"> Secondary</Button>
            <Button variant="solid" sx={{ border: '2px solid' }} color="neutral"> Neutral</Button>
            <Button variant="solid" loading sx={{ border: '2px solid' }} color="neutral"> Neutral</Button>
            <Button variant="solid" disabled color="neutral"> Neutral</Button>
            <Button variant="solid" sx={{ border: '2px solid' }} color="success"> Sucess</Button> */}
        </Box>
    )
}

export default Resources