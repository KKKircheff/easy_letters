
import { Check } from '@mui/icons-material';
import { Grid, Typography, useTheme } from '@mui/joy';

type Props = {
    rowData: {
        title: string,
        free: boolean | string,
        oneShot: boolean | string,
        proActive: boolean | string,
    }
}

const PriceTableRow = ({ rowData }: Props) => {
    const theme = useTheme();
    const c = theme.vars.palette;

    const renderContent = (data: boolean | string) => {
        if (typeof data === 'string') {

            return data
        } else {
            return data && <Check sx={{ fontSize: 'xl', color: c.primary[600] }} />
        }

    }
    return (
        <Grid container
            pl='3vw'
            pr='1vw'
            pt={2}
            pb={1.7}
            fontWeight='500'
            alignItems='center'
            sx={{
                color: c.neutral[500],
                borderTop: `1px solid ${c.warning[100]}`,
                fontSize: '.9rem',
            }}
        >
            <Grid xs={6} textAlign='left' >
                <Typography textColor='neutral.500'>
                    {rowData.title}
                </Typography>
            </Grid>
            <Grid xs={2} >
                <Typography textColor='neutral.500'>
                    {renderContent(rowData.free)}
                </Typography>
            </Grid>
            <Grid xs={2} >
                <Typography textColor='neutral.500'>
                    {renderContent(rowData.oneShot)}
                </Typography>
            </Grid>
            <Grid xs={2} >
                <Typography textColor='neutral.500'>
                    {renderContent(rowData.proActive)}
                </Typography>
            </Grid>
            {/* <Grid xs={2} >{rowData.proActive && <Check sx={{ fontSize: 'xl', color: c.primary[600] }} />}</Grid> */}
        </Grid>
    );
}

export default PriceTableRow;