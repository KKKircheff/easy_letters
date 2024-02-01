import { Box, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import PricingHero from "./pricing-hero/PricingHero.section"
import PricingPlans from "./pricing-plans/PricingPlans.section"
import PricingTable from "./price-table/PriceTable.section"


const Pricing = () => {
    return (
        <Box>
            <UnderNavBar />
            <PricingHero />
            <PricingPlans />
            <Box py={8}>
                <PricingTable />
            </Box>
            <UnderNavBar />
        </Box>
    )
}

export default Pricing