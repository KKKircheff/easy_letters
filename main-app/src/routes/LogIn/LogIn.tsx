import { Box, Card, CardCover, Grid } from "@mui/joy"
import logIn from '/assets/images/login.jfif'


const LogIn = () => {
    return (
        <Box>
            <Grid container>
                <Grid columns={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardCover>
                            <img src={logIn} alt="LogIn docs and avatar image" />
                        </CardCover>
                    </Card>
                </Grid>

                <Grid columns={{ xs: 12, md: 6 }} bgcolor='neutral[200]'>

                </Grid>

            </Grid>
        </Box>
    )
}

export default LogIn