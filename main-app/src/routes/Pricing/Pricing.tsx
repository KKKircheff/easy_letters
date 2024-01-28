import { Box, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import PricingHero from "./pricing-hero/PricingHero.section"
import PricingPlans from "./pricing-plans/PricingPlans.section"


const Pricing = () => {
    return (
        <Box>
            <UnderNavBar />
            <PricingHero />
            <PricingPlans />
        </Box>
    )
}

export default Pricing