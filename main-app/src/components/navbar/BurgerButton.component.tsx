import { IconButton } from "@mui/joy"

import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/icons-material/Menu';
import { useTheme } from "@mui/joy";

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerButton = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
    const theme = useTheme();

    return (
        <IconButton
            variant='plain'
            color="neutral"
            sx={{
                alignItems: 'center',
                borderRadius: theme.radius.xl,
            }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? <CloseIcon sx={{ color: 'neutral.900' }} /> : <Menu sx={{ color: 'neutral.900' }} />}
        </IconButton>
    )
}

export default BurgerButton