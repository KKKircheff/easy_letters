import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/AuthContext';

import { Stack, useTheme } from "@mui/joy"
import DarkButton from '../buttons/dark-button/DarkButton.component';

import LogInGroupMenu from './LogInGroupMenu.component';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreVert from '@mui/icons-material/MoreVert';

type Props = {
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInGroup = ({ setIsDrawerOpen }: Props) => {

    const { user, userProfile } = useUserContext()


    const navigate = useNavigate();

    const c = useTheme().palette;

    const [isProfileNavOpen, setIsProfileNavOpen] = useState(false);

    const greetName = userProfile ? userProfile.general.firstName : 'no user'


    const handleButtonClick = () => {
        if (!userProfile) {
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
            {userProfile
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