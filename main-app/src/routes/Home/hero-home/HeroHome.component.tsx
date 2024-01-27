import {
    Box,
    Button,
    Card,
    CardCover,
    Stack,
    Typography,
    useTheme,
} from "@mui/joy"

import heroHome from '/assets/images/heroHome.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import { styleVariables } from "../../../styles/styleVariables";
import { iconGradientStyles } from "../../../styles/iconGradientStyles";

const HeroHome = () => {
    const navigate = useNavigate();
    const { xs, md, lg } = styleVariables.layoutPadding;
    const theme = useTheme()

    return (
        <Box>
            <Stack direction={{ xs: 'column-reverse', md: 'row' }} justifyContent='space-between'>

                <Stack
                    direction='column'
                    justifyContent='flex-end'
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                    flexGrow='1'
                    gap={0.2}
                    sx={{
                        padding: { xs: `50px ${xs} 10px ${xs}`, md: '0 0 5% 0' },
                        paddingLeft: { xs, md, lg },
                        width: { xs: '100%', md: '50%' },
                        fontSize: { xs: '10vw', sm: '7vw', md: '3vw' },
                    }}>
                    <Typography level='h1' fontWeight='800' fontSize='inherit'>AI Writer -</Typography>
                    <Typography level='h1' fontWeight='800' fontSize='inherit'
                        sx={iconGradientStyles.scondaryPrimary}
                    >Build With Ease</Typography>
                    <Typography level='h1' fontWeight='800' fontSize='inherit'>Your Job Application Letters</Typography>
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
                        onClick={() => navigate('/ai-writer')}
                        endDecorator={<ArrowForwardIosIcon sx={{ fontSize: 'sm' }} />}
                    >Get One Free</Button>
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
            </Stack>
        </Box >
    )
}

export default HeroHome