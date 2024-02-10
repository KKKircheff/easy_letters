import { useNavigate } from 'react-router-dom';

import { Stack, Typography, useTheme } from "@mui/joy"
import DarkButton from '../buttons/dark-button/DarkButton.component';

import { useUserContext } from '../../context/AuthContext';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogInGroupMenu from './LogInGroupMenu.component';
import MoreVert from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';

type Props = {
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInGroup = ({ setIsDrawerOpen }: Props) => {

    const navigate = useNavigate();
    const c = useTheme().palette;

    const { user } = useUserContext()

    const greetName = user ? user.displayName.split(' ')[0] : 'no user'
    const [isProfileNavOpen, setIsProfileNavOpen] = useState(false);

    const handleButtonClick = () => {
        if (!user) {
            setIsDrawerOpen(false);
            navigate('/login');
        } else {
            setIsProfileNavOpen(!isProfileNavOpen)
        }
    }

    return (
        <Stack
            mx='auto'
            role="none"
            direction={{ xs: 'column', md: 'column' }}
            alignItems='center'
            spacing={1.5}
            bgcolor='transparent'
            onClick={handleButtonClick}
            onMouseLeave={() => user && setIsProfileNavOpen(false)}
            onMouseEnter={() => user && setIsProfileNavOpen(true)}
        >
            {user
                ? <DarkButton
                    sx={{
                        paddingY: .5,
                        height: '45px',
                        paddingRight: 2,
                        fontSize: 'xSmallTitle',
                        '&:hover': {
                            fontWeight: '600',
                            bgcolor: 'transparent',
                            color: c.neutral[600],
                            border: `2px solid ${c.neutral[600]}`,
                        }
                    }}
                    endDecorator={<MoreVert sx={{ marginLeft: 1, borderRadius: '50%' }} />}
                >{`Hi, ${greetName}`}</DarkButton>

                : <DarkButton
                    sx={{
                        fontSize: 'xSmallTitle',
                        '&:hover': {
                            fontWeight: '600',
                            bgcolor: 'transparent',
                            color: c.neutral[600],
                            border: `2px solid ${c.neutral[600]}`,
                            "& .menu-dots-hover": {
                                color: c.neutral[700],
                            }
                        }
                    }}
                    endDecorator={<PermIdentityOutlinedIcon />}
                >Log In</DarkButton>
            }
            {isProfileNavOpen && user && <LogInGroupMenu setIsDrawerOpen={setIsDrawerOpen} setIsProfileNavOpen={setIsProfileNavOpen} />}
        </Stack>
    )
}

export default LogInGroup