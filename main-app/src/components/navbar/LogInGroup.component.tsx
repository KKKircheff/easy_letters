import { useNavigate } from 'react-router-dom';

import { Button, Stack, useTheme } from "@mui/joy"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useUserContext } from '../../context/AuthContext';

type Props = {
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInGroup = ({ setIsDrawerOpen }: Props) => {

    const navigate = useNavigate();
    const theme = useTheme();

    const { user, logOut } = useUserContext()

    const handleClick = async () => {
        if (!user) {
            navigate('/login');
            setIsDrawerOpen(false);
        } else {
            await logOut();
            navigate('/');
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
            <Button
                color='neutral'
                sx={{
                    bgcolor: 'neutral.800',
                    borderRadius: theme.vars.radius.full,
                    px: 4, py: 1.5,
                    fontSize: { xs: 'sm' },
                }}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >{user ? 'Log Out' : 'Log In'}</Button>
        </Stack>
    )
}

export default LogInGroup