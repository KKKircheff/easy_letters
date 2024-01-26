import Box from '@mui/joy/Box'
import HeroHome from './hero-home/HeroHome.component';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';
import TestCard from './TestCard';
import { Stack } from '@mui/joy';


const Home = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <HeroHome />
            <UnderNavBar />
            <Stack direction='row' justifyContent='center'>
                <TestCard />
            </Stack>
        </Box>
    )
}

export default Home