import { useNavigate } from 'react-router-dom';

import { Button, Stack, useTheme } from "@mui/joy"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useUserContext } from '../../context/AuthContext';
import DarkButton from '../buttons/dark-button/DarkButton.component';

type Props = {
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInGroup = ({ setIsDrawerOpen }: Props) => {

    const navigate = useNavigate();
    const c = useTheme().palette;


    const { user, logOut } = useUserContext()

    const greetName = user ? user.displayName.split(' ')[0] : ''

    const handleClick = async () => {
        if (!user) {
            navigate('/login');
            setIsDrawerOpen(false);
        } else {
            navigate('/profile');
            setIsDrawerOpen(false);
        }
    }

    return (
        <Stack
            mx='auto'
            role="none"
            direction='row'
            alignItems='center'
            spacing={1}
            bgcolor='transparent'
            onClick={handleClick}
        >
            {/* <Button
                color='neutral'
                sx={{
                    bgcolor: 'neutral.800',
                    borderRadius: theme.vars.radius.full,
                    px: 4, py: 1.5,
                    fontSize: { xs: 'sm' },
                }}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >{user ? `Hi, ${greetName}` : 'Log In'}</Button> */}
            <DarkButton
                sx={{
                    fontSize: 'xSmallTitle',
                    '&:hover': {
                        fontWeight: '600',
                        bgcolor: 'transparent',
                        color: c.neutral[600],
                        border: `2px solid ${c.neutral[600]}`,
                    }
                }}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >{user ? `Hi, ${greetName}` : 'Log In'}</DarkButton>
        </Stack>
    )
}

export default LogInGroup