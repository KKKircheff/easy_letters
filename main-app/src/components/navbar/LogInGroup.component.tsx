import { useNavigate } from 'react-router-dom';

import { Button, Stack } from "@mui/joy"
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
            <Button
                color='neutral'
                sx={{
                    bgcolor: 'neutral.800',
                    borderRadius: theme.vars.radius.full,
                    px: 4, py: 1.5,
                    fontSize: { xs: 'sm' },
                }}
                onClick={() => navigate('/profile')}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >Alexandra</Button>


        </Stack>
    )
}

export default LogInGroup