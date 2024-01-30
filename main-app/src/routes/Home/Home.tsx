import Box from '@mui/joy/Box'

import HomeHero from './home-hero/HomeHero.section';
import HomeProcessStepper from './home-process-stepper/HomeProcessStepper.section';
import HomeAboutUs from './home-aboutus/HomeAboutUs.section';
import HomeThreeResumes from './home-three-resumes/HomeThreeResumes.section';
import HomeAboutTemplates from './home-about-templates/HomeAboutTemplates.section';
import HomeKeyWords from './home-key-words/HomeKeyWords.section';
import UnderNavBar from '../../components/navbar/UnderNavBar.component';

import { styleVariables } from '../../styles/styleVariables';

const Home = () => {
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box sx={{ width: '100%' }}>
            <HomeHero />
            <Box
                pt={10}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeAboutUs />
            </Box>

            <Box
                boxSizing='border-box'
                overflow='hidden'
                pt={{ xs: 14, md: 14, lg: 16 }}
                pb={{ xs: 10, md: 10, lg: 12 }}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeThreeResumes />
            </Box>

            <Box
                pt={12}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeProcessStepper />
            </Box>
            {/* <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeKeyWords />
            </Box> */}
            <UnderNavBar />
        </Box>
    )
}

export default Home