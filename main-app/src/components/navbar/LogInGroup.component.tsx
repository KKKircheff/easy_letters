import { useNavigate } from 'react-router-dom';

import { Button, Stack, useTheme } from "@mui/joy"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


const LogInGroup = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Stack
            mx='auto'
            role="none"
            direction='row'
            alignItems='center'
            spacing={1}
            bgcolor='transparent'
        >
            <Button
                color='neutral'
                sx={{
                    bgcolor: 'neutral.800',
                    borderRadius: theme.vars.radius.full,
                    px: 4, py: 1.5,
                    fontSize: { xs: 'sm' },
                }}
                onClick={() => navigate('/login')}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >Log In</Button>


        </Stack>
    )
}

export default LogInGroup