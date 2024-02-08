import {
    Box,
    Typography
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import DarkButton from "../../components/buttons/dark-button/DarkButton.component"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useUserContext } from "../../context/AuthContext";



const Profile = () => {
    const { user, logOut } = useUserContext()

    const handleLogOut = async () => {
        await logOut()
    }

    return (
        <Box>
            <UnderNavBar />
            <Typography>
                Welcome to profile page,
            </Typography>
            <DarkButton
                onClick={handleLogOut}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >
                Log Out
            </DarkButton>
        </Box>
    )
}

export default Profile