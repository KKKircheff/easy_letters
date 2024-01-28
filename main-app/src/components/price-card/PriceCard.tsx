import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { Box, useTheme } from '@mui/joy';
import { styleVariables } from '../../styles/styleVariables';
// import { iconGradientStyles } from '../../styles/iconGradientStyles';
import DarkButton from '../buttons/dark-button/DarkButton.component';

type Props = {
    plan: {
        chip: string,
        title: string,
        listItems: string[],
        price: number,
        priceDescription: string,
        buttonText: string,
    }
}

const PriceCard = ({ plan }: Props) => {
    const { xs, md, lg } = styleVariables.layoutPadding;
    const theme = useTheme();
    const c = theme.vars.palette;


    return (
        <Box boxShadow='0' padding='0' flex={1}>
            <Card
                size="lg"
                variant="plain"
                sx={{
                    mx: 'auto',
                    bgcolor: 'transparent',
                    px: { xs, md: 2, lg: 4 },
                    border: `1px solid ${c.neutral[300]}`,
                    maxWidth: '500px',
                }}
            >
                <Chip
                    size="md"
                    variant="plain"
                    color="neutral"
                    sx={{ bgcolor: 'transparent' }}
                >
                    {plan.chip.toUpperCase()}
                </Chip>

                <Typography level="h2">{plan.title.toUpperCase()}</Typography>

                <Divider inset="none" />

                <List
                    size="sm"
                    sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))', fontWeight: 'md' }}>

                    {plan.listItems.map((listItem) => {
                        return (
                            <ListItem key={listItem}>
                                <ListItemDecorator>
                                    <Check color='primary' />
                                </ListItemDecorator>
                                {listItem}
                            </ListItem>
                        )
                    })}
                </List>

                <Divider inset="none" sx={{ my: 1 }} />

                <CardActions
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', xl: 'row' },
                        justifyContent: { sm: 'space-between' },
                        gap: 4,
                    }}>

                    <Typography level="title-lg" >
                        {plan.price}€{' '}
                        <Typography fontSize="sm" textColor="text.tertiary">
                            {plan.priceDescription}
                        </Typography>
                    </Typography>

                    <DarkButton
                        color="neutral"
                        sx={{
                            py: '6px',
                            px: '10%',
                            border: `2px solid ${c.neutral[500]}`,
                            fontWeight: 'md',
                            fontSize: 'sm'
                        }}>{plan.buttonText}
                    </DarkButton>

                </CardActions>
            </Card>
        </Box>


    );
}
export default PriceCard