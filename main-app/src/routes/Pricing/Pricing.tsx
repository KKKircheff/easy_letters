import { Box, Typography } from "@mui/joy"
import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import PricingHero from "./pricing-hero/PricingHero.section"
import PricingPlans from "./pricing-plans/PricingPlans.section"
import PricingTable from "./price-table/PriceTable.section"
import Footer from "../../components/footer/Footer.component"


const Pricing = () => {
    return (
        <Box>
            <PricingHero />
            <PricingPlans />
            <Box py={8}>
                <PricingTable />
            </Box>
            <Footer />
        </Box>
    )
}

export default Pricing