import Box from '@mui/joy/Box'

import UnderNavBar from '../../components/navbar/UnderNavBar.component';
import HomeHero from './home-hero/HomeHero.section';
import HomeAboutU from './home-aboutus/HomeAboutUs.section';
import { styleVariables } from '../../styles/styleVariables';
import HomeProcessStepper from './home-process-stepper/HomeProcessStepper.section';
import HomeAboutUs from './home-aboutus/HomeAboutUs.section';
import HomeUniqueDocs from './home-unique-docs/HomeUniqueDocs.section';
import HomeAboutTemplates from './home-about-templates/HomeAboutTemplates.section';
import HomeKeyWords from './home-key-words/HomeKeyWords.section';

const Home = () => {
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box sx={{ width: '100%' }}>
            <HomeHero />
            <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeAboutUs />
            </Box>

            <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeUniqueDocs />
            </Box>

            <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
            >
                <HomeProcessStepper />
            </Box>

            <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeAboutTemplates />
            </Box>

            <Box
                mt={6}
                sx={{ px: { xs, md, lg } }}
                bgcolor={'neutral.100'}>
                <HomeKeyWords />
            </Box>
            <UnderNavBar />
        </Box>
    )
}

export default Home