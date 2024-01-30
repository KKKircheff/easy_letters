
import { Check } from '@mui/icons-material';
import { Grid, useTheme } from '@mui/joy';

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
            pl='3vw' pr='1vw' pt={2} pb={1.7}
            fontWeight='500'
            sx={{
                color: c.neutral[500],
                borderBottom: `1.5px solid ${c.neutral[200]}`,
                fontSize: '.95rem',
            }}
        >
            <Grid xs={6} textAlign='left' >{rowData.title}</Grid>
            <Grid xs={2} >{renderContent(rowData.free)}</Grid>
            <Grid xs={2} >{renderContent(rowData.oneShot)}</Grid>
            <Grid xs={2} >{renderContent(rowData.proActive)}</Grid>
            {/* <Grid xs={2} >{rowData.proActive && <Check sx={{ fontSize: 'xl', color: c.primary[600] }} />}</Grid> */}
        </Grid>
    );
}

export default PriceTableRow;