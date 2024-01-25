import {
    Box,
    Button,
    Card,
    CardCover,
    Grid,
    Stack,
    Typography
} from "@mui/joy"

import heroHome from '/assets/images/heroHome.webp'
import theme from "../../../styles/theme"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

const HeroHome = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Grid container direction={{ xs: 'column-reverse', md: 'row' }} justifyContent='space-between'>
                <Stack
                    direction='column'
                    spacing={{ xs: 4, sm: 2, md: 4 }}
                    justifyContent='flex-end'
                    alignItems='flex-start'
                    flexGrow='1'
                    sx={{
                        padding: { xs: '50px 4vw 10px 4vw', md: '0 0 5% 0' },
                        paddingLeft: { sm: 3, md: '7.5vw', lg: '10vw' },
                        width: { xs: '95%', md: '50%' },
                    }}
                >
                    <Stack
                        justifyContent={{ xs: 'center', md: 'left' }}
                        width='100%'
                        gap={2}
                        sx={{
                            fontSize: { xs: '10vw', sm: '7vw', md: '3vw' },
                        }}>
                        <Stack textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography level='h1' fontWeight='800' fontSize='inherit'>AI Writer -</Typography>
                            <Typography level='h1' fontWeight='800' fontSize='inherit'>Build Your Job</Typography>
                            <Typography level='h1' fontWeight='800' fontSize='inherit'>Applications With Ease</Typography>

                            <Button
                                color='neutral'
                                size="sm"
                                sx={{
                                    bgcolor: 'neutral.800',
                                    borderRadius: theme.vars.radius.full,
                                    mt: '7%',
                                    mx: { xs: 'auto', md: '0' },
                                    py: { xs: 2, md: 1.5 },
                                    width: { xs: '50%', md: '30%' },
                                    fontSize: { xs: 'sm' },
                                }}
                                onClick={() => navigate('/ai-creator')}
                                endDecorator={<ArrowForwardIosIcon sx={{ fontSize: 'sm' }} />}
                            >Get One Free</Button>
                        </Stack>
                    </Stack>
                </Stack>

                <Card sx={{
                    width: { xs: '95%', md: '37%' },
                    aspectRatio: { xs: '1.5', sm: '2', md: '1' },
                    transform: { xs: 'skew(0)', md: 'skew(-4deg, 0)' },
                    borderRadius: theme.vars.radius.xl,
                    m: { xs: '10px auto 0 auto', md: '20px 2% 0 0' },
                }}>
                    <CardCover>
                        <img src={heroHome} alt="flow hero image" />
                    </CardCover>
                </Card>
            </Grid>
        </Box >
    )
}

export default HeroHome