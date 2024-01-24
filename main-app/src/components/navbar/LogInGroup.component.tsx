import { useNavigate } from 'react-router-dom';

import { Button, IconButton, Stack } from "@mui/joy"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import theme from '../../styles/theme';


const LogInGroup = () => {
    const navigate = useNavigate();

    return (
        <Stack
            mx='auto'
            role="none"
            direction='row'
            alignItems='center'
            spacing={1}
            bgcolor='transparent'
        >
            <Button sx={{
                bgcolor: 'neutral.800',
                borderRadius: '25px',
                px: 8, py: 1.2,
                fontWeight: 400
            }}
                onClick={() => navigate('/ai-creator')}
            >AI Creator</Button>

            <IconButton
                onClick={() => navigate('/profile')}
                variant='solid'
                sx={{
                    bgcolor: 'neutral.800',
                    borderRadius: theme.radius.xl
                }}>
                <PermIdentityOutlinedIcon fontSize='large' sx={{ color: 'currentcolor' }} />
            </IconButton>
        </Stack>
    )
}

export default LogInGroup