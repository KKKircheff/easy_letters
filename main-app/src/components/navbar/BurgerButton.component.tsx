import { IconButton } from "@mui/joy"

import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/icons-material/Menu';

import theme from '../../styles/theme';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerButton = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
    return (
        <IconButton
            variant='plain'
            color="neutral"
            sx={{
                alignItems: 'center',
                borderRadius: theme.radius.xl,
            }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? <CloseIcon /> : <Menu />}
        </IconButton>
    )
}

export default BurgerButton