import Box from '@mui/joy/Box'

import UnderNavBar from '../../components/navbar/UnderNavBar.component';
import HomeHero from './home-hero/HomeHero.section';

const Home = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <HomeHero />
            <UnderNavBar />
        </Box>
    )
}

export default Home