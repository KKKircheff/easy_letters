

import { Stack, useTheme } from '@mui/joy';
import { styleVariables } from "../../../styles/styleVariables";
import { plans } from './plans';
import PriceCard from '../../../components/price-card/PriceCard';

const PricingPlans = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    const theme = useTheme();
    const c = theme.vars.palette;

    return (
        <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={{ xs: 6, lg: 2 }}
            justifyContent='space-around'
            px={{ xs, md, lg }}
            py={6}
            bgcolor={`${c.neutral[100]}`}
        >
            {plans.map((plan) => {
                return (
                    <PriceCard key={plan.title} plan={plan} />
                )
            })}
        </Stack >
    );
}
export default PricingPlans