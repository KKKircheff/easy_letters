import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Grid from '@mui/joy/Grid';
import DemoTestCard from '../../components/demo-test-card/DemoTestCard.component';
import HeroHome from './hero-home/HeroHome.component';

const Home = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <HeroHome />

            {/* <Grid container spacing={4} sx={{ flexGrow: 1 }} justifyContent='space-around'>
                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>
                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>
            </Grid> */}

            {/* <Grid container spacing={4} sx={{ flexGrow: 1 }} justifyContent='space-around'>
                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>
                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>

                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>

                <Grid columns={{ xs: 12, md: 6 }}>
                    <DemoTestCard />
                </Grid>

                <Grid xs={4}>
                    <Button color='secondary'>My Home button</Button>
                    <Button color='secondary' variant='soft'>My Home button</Button>

                    <Button color='primary'>My Home button</Button>
                    <Button variant='outlined' color='primary'>My Home button</Button>

                    <Button color='warning' sx={{ bgcolor: 'warning.400' }}>My Home button</Button>
                    <Button color='warning' variant='outlined'>My Home button</Button>

                    <Button color='danger' sx={{ bgcolor: 'danger.400' }}>My Home button</Button>
                    <Button color='danger' variant='outlined'>My Home button</Button>

                    <Button color='success' sx={{ bgcolor: 'success.500' }}>My Home button</Button>
                    <Button color='success' variant='outlined'>My Home button</Button>

                    <Button color='neutral'>My Home button</Button>
                    <Button color='neutral' variant='outlined'>My Home button</Button>
                </Grid>
                <Grid xs={4}>
                    <DemoTestCard />
                </Grid>
                <Grid xs={4}>
                    <Button color='primary'>My Home button</Button>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default Home