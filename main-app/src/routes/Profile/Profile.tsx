import {
    Box,
    Typography
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import DarkButton from "../../components/buttons/dark-button/DarkButton.component"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useUserContext } from "../../context/AuthContext";
import ProfileGeneral from "./ProfileGeneral.section";



const Profile = () => {
    const { logOut, userProfile, updateUserProfile } = useUserContext()

    const handleUpdate = async () => {
        const updatedProfile = {
            ...userProfile,
            general: {
                ...userProfile.general,
                phoneNumber: '+31 684 771 704'
            }
        };
        try {
            await updateUserProfile(updatedProfile);
        } catch (error) {
            alert(error)
        }
    };

    const handleDelete = async () => {
        const updatedProfile = { ...userProfile };

        if (updatedProfile.general && updatedProfile.general.phoneNumber) {
            delete updatedProfile.general.phoneNumber;
        }
        try {
            await updateUserProfile(updatedProfile);
        } catch (error) {
            alert(error)
        }
    };

    return (
        <Box>
            <UnderNavBar />
            <Typography>
                Welcome to profile page,
            </Typography>
            <ProfileGeneral general={userProfile.general} />
            <Typography>
                Phone number:{userProfile?.general.phoneNumber}
            </Typography>

            <DarkButton
                onClick={handleUpdate}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >
                Update number
            </DarkButton>
            <DarkButton
                onClick={handleDelete}
                endDecorator={<PermIdentityOutlinedIcon sx={{ color: 'currentcolor' }} />}
            >
                Delete phone number
            </DarkButton>
        </Box>
    )
}

export default Profile