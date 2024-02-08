
import { styleVariables } from '../../../styles/styleVariables';
import { plansTableChecks } from '../plans';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/joy';
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
                px: { xs: 0, sm: xs, md, lg },
                marginX: 'auto',
            }}>
            <Stack
                borderRadius={{ xs: '0', sm: 'lg' }}
                overflow='hidden'
                sx={{
                    border: `1px solid ${c.warning[200]}`,
                    pb: .8
                }}>

                <Grid
                    container
                    xs={12}
                    alignItems='center'
                    bgcolor={c.warning[200]}
                    color={c.neutral[500]}
                    fontWeight='600'
                    fontSize={{ xs: 'sm', md: 'sm' }}
                    pl='3vw' pr='2vw' pt={2.7} pb={2}
                    sx={{ borderBottom: `1.5px solid ${c.warning[200]}` }}
                >

                    <Grid xs={6} textAlign='left'>
                        <Typography textColor='neutral.600'>
                            Features
                        </Typography>
                    </Grid>
                    <Grid xs={2} >
                        <Typography textColor='neutral.600'>
                            Free
                        </Typography>
                    </Grid>
                    <Grid xs={2} >
                        <Typography textColor='neutral.600'>
                            One Shot
                        </Typography>
                    </Grid>
                    <Grid xs={2} >
                        <Typography textColor='neutral.600'>
                            Pro Active
                        </Typography>
                    </Grid>
                </Grid>
                {plansTableChecks.map((rowData, index) => <PriceTableRow key={index} rowData={rowData} />)}
            </Stack>
        </Stack >

    );
}

export default PriceTable;