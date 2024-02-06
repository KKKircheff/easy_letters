import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
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
import { iconGradientStyles } from '../../styles/iconGradientStyles';
import DarkButton from '../buttons/dark-button/DarkButton.component';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


type Props = {
    plan: {
        chip: string,
        title: string,
        listItems: string[],
        price: number,
        priceDescription: string,
        buttonText: string,
        buttonLink: string,
    }
}

const PriceCard = ({ plan }: Props) => {
    const { xs } = styleVariables.layoutPadding;
    const c = useTheme().palette;

    const navigate = useNavigate()

    return (
        <Box padding='0' flex={1}>
            <Card
                size="lg"
                variant="plain"
                sx={{
                    mx: 'auto',
                    py: 4,
                    px: { xs, md: 4, lg: 4 },
                    bgcolor: 'white',
                    maxWidth: '500px',
                    borderRadius: 'xl',
                    border: `1px solid ${c.neutral[300]}`
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

                <Typography
                    level="h2"
                    fontWeight='800'
                    sx={iconGradientStyles.scondaryPrimary}
                >{plan.title.toUpperCase()}
                </Typography>

                <Divider inset="none" />

                <List
                    size="sm"
                    sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))', fontWeight: 'md' }}>

                    {plan.listItems.map((listItem) => {
                        return (
                            <ListItem key={listItem}>
                                <ListItemDecorator  >
                                    <Check
                                        sx={{
                                            color: 'white',
                                            borderRadius: 'md',
                                            background: `linear-gradient(45deg ,${c.secondary[500]}, ${c.primary[500]} )`!,
                                            opacity: .8,
                                            WebkitTextFillColor: 'transparent'!,
                                        }} />
                                </ListItemDecorator>
                                <Typography textColor='neutral.500' textAlign='left'>
                                    {listItem}
                                </Typography>
                            </ListItem >
                        )
                    })}
                </List >

                <Divider inset="none" sx={{ my: 1 }} />

                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', xl: 'row' },
                        justifyContent: { sm: 'center', lg: 'space-between' },
                        alignItems: 'center',
                        gap: { xs: 2, lg: 1 }
                    }}>

                    <Typography>
                        <Typography
                            level='h1'
                            fontWeight='700'
                            textColor='neutral.700'
                        >
                            {plan.price}{' '}{' '}
                        </Typography>
                        <Typography fontSize="sm" fontWeight='300' textColor="text.icon">
                            {plan.priceDescription}
                        </Typography>
                    </Typography>

                    <DarkButton
                        color="neutral"
                        onClick={() => navigate(plan.buttonLink)}
                        endDecorator={<ArrowForwardIosIcon sx={{ fontSize: 'sm' }} />}
                        sx={{
                            py: '10px',
                            px: '10px',
                            width: '170px',
                            border: `2px solid ${c.neutral[500]}`,
                            fontWeight: 'md',
                            fontSize: 'sm',
                        }}>{plan.buttonText}
                    </DarkButton>

                </Stack>
            </Card >
        </Box >


    );
}
export default PriceCard