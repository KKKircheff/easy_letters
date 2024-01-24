import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Grid from '@mui/joy/Grid';
import DemoTestCard from '../../components/demo-test-card/DemoTestCard.component';


const Home = () => {
    return (
        <Box sx={{ width: '100%', paddingTop: '120px' }}>
            <Grid container spacing={4} sx={{ flexGrow: 1 }} justifyContent='space-around'>
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
                    <Button variant='outlined' color='primary'>My Home button</Button>
                    <Button color='secondary'>My Home button</Button>
                    <Button sx={{ bgcolor: 'danger.400' }}>My Home button</Button>
                    <Button color='warning' sx={{ bgcolor: 'success.300' }}>My Home button</Button>
                    <Button color='warning' sx={{ bgcolor: 'warning.300' }}>My Home button</Button>
                    <Button color='neutral'>My Home button</Button>
                </Grid>
                <Grid xs={4}>
                    <DemoTestCard />
                </Grid>
                <Grid xs={4}>
                    <Button color='primary'>My Home button</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home