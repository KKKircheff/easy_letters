import Box from '@mui/joy/Box'
import HeroHome from './hero-home/HeroHome.component';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';

const Home = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <HeroHome />
            <UnderNavBar />
        </Box>
    )
}

export default Home