import Box from '@mui/joy/Box'

import HomeHero from './home-hero/HomeHero.section';
import HomeProcessStepper from './home-process-stepper/HomeProcessStepper.section';
import HomeAboutUs from './home-aboutus/HomeAboutUs.section';
import HomeThreeResumes from './home-three-resumes/HomeThreeResumes.section';
import HomeKeyWords from './home-key-words/HomeKeyWords.section';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';

import { styleVariables } from '../../styles/styleVariables';

const Home = () => {
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box sx={{ width: '100%' }}>
            <Box pb={6}>
                <HomeHero />
            </Box>

            <Box
                pt={{ xs: 5, md: 10 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeAboutUs />
            </Box>

            <Box
                boxSizing='border-box'
                overflow='hidden'
                pt={{ xs: 7, md: 14, lg: 16 }}
                pb={{ xs: 7, md: 10, lg: 12 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeThreeResumes />
            </Box>

            <Box
                pt={8}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeProcessStepper />
            </Box>
            <Box
                mt={10}
                bgcolor={'neutral.100'}
                py={6}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeKeyWords />
            </Box>
            <UnderNavBar />
        </Box>
    )
}

export default Home