import { Button, Divider, Stack, useTheme } from "@mui/joy";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/AuthContext";

type Props = {
    setIsProfileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInGroupMenu = ({ setIsProfileNavOpen, setIsDrawerOpen }: Props) => {

    const navigate = useNavigate();
    const { logOut } = useUserContext();

    const c = useTheme().palette;

    const handleClick = () => {
        setIsDrawerOpen(false)
        setIsProfileNavOpen(false);
        navigate('/profile')
    }

    const handleLogOut = () => {
        setIsDrawerOpen(false)
        setIsProfileNavOpen(false)
        logOut();
    }

    return (
        <Stack
            bgcolor='neutral.800'
            width='100%'
            py={1.5}
            borderRadius='sm'
            sx={{
                border: `1px solid ${c.neutral[600]}`,
                boxShadow: 'sm'
            }}
        >
            {/* <Divider color='neutral' sx={{ bgcolor: c.neutral[600], maxHeight: '0.7px' }} /> */}
            < Button
                color="neutral"
                variant="plain"
                sx={{
                    paddingX: 2.5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: c.neutral[50],
                    borderRadius: '0px',
                    width: '100%'
                }}
                startDecorator={< PermIdentityOutlinedIcon sx={{ color: c.neutral[100], marginTop: .2 }} />}
                onClick={handleClick}
            >
                Profile
            </Button >

            <Divider color='neutral' sx={{ bgcolor: c.neutral[700], maxHeight: '0.7px' }} />

            <Button
                color="neutral"
                variant="plain"
                sx={{
                    paddingX: 2.5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: c.neutral[50],
                    borderRadius: '0px',
                    width: '100%'
                }}
                startDecorator={<PowerSettingsNewIcon sx={{ color: c.neutral[100], marginTop: .2 }} />}
                onClick={handleLogOut}
            >
                Log Out
            </Button>

            {/* <Divider color='neutral' sx={{ bgcolor: c.neutral[600], maxHeight: '0.7px' }} /> */}


        </Stack >
    )
}

export default LogInGroupMenu