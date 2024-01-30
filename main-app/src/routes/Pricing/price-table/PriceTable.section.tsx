
import { styleVariables } from '../../../styles/styleVariables';
import { plansTableChecks } from '../plans';
import { Box, Grid, Stack, useTheme } from '@mui/joy';
import PriceTableRow from '../../../components/price-table-row/PriceTableRow.component';

const PriceTable = () => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    const theme = useTheme();
    const c = theme.vars.palette;

    return (
        <Stack
            boxSizing='border-box'
            overflow='hidden'
            sx={{
                px: { xs, md, lg },
                marginX: 'auto',
            }}>
            <Stack
                borderRadius='lg'
                overflow='hidden'
                sx={{
                    boxShadow: 'md',
                    border: `1px solid ${c.neutral[200]}`
                }}>

                <Grid
                    container
                    xs={12}
                    bgcolor={c.neutral[50]}
                    fontSize={{ xs: 'sm', md: 'sm' }} pl='3vw' pr='2vw' pt={2.5} pb={2}
                    sx={{ borderBottom: `1.5px solid ${c.neutral[200]}` }}
                    fontWeight='600'
                >

                    <Grid xs={6} textAlign='left'>Features</Grid>
                    <Grid xs={2} >Free</Grid>
                    <Grid xs={2} >One Shot</Grid>
                    <Grid xs={2} >Pro Active</Grid>
                </Grid>
                {plansTableChecks.map((rowData, index) => <PriceTableRow key={index} rowData={rowData} />)}
            </Stack>
        </Stack >

    );
}

export default PriceTable;