import Box from '@mui/joy/Box'

import HomeHero from './home-hero/HomeHero.section';
import HomeProcessStepper from './home-process-stepper/HomeProcessStepper.section';
import HomeAboutUs from './home-aboutus/HomeAboutUs.section';
import HomeThreeResumes from './home-three-resumes/HomeThreeResumes.section';
import HomeKeyWords from './home-key-words/HomeKeyWords.section';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';
import Footer from '../../components/footer/Footer.component';

import { styleVariables } from '../../styles/styleVariables';

const Home = () => {
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box sx={{ width: '100%' }}>
            <Box pb={6}>
                <HomeHero />
            </Box>

            <Box
                pt={{ xs: 5, md: 12 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeAboutUs />
            </Box>

            <Box
                boxSizing='border-box'
                overflow='hidden'
                pt={{ xs: 7, md: 16, lg: 16 }}
                pb={{ xs: 7, md: 12, lg: 12 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeThreeResumes />
            </Box>

            <Box
                pt={{ xs: 8, md: 16 }}
                pb={{ xs: 2, md: 4 }}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeProcessStepper />
            </Box>
            <Box
                mt={10}
                bgcolor={'neutral.100'}
                pt={10}
                pb={16}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeKeyWords />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default Home