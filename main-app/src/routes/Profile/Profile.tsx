import {
    Box,
    Stack,
    Typography
} from "@mui/joy"

import UnderNavBar from "../../components/navbar/UnderNavBar.component"
import DarkButton from "../../components/buttons/dark-button/DarkButton.component"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useUserContext } from "../../context/UserContext";
import ProfileGeneral from "./ProfileGeneral.section";
import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar.section";
import Footer from "../../components/footer/Footer.component";

const Profile = () => {
    const { logOut, userProfile, updateUserProfile } = useUserContext()

    const [isSidebarWide, setIsSidebarWide] = useState(window.innerWidth > 900)
    const wideWidth = '220px'
    const compactWidth = '70px'

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
        <Stack
            direction='row'
            position='sticky'
            top={0}
            minHeight='100vh'
            bgcolor='secondary.100'
        >
            <Stack
                role='sidebar'
                alignItems='flex-start'
                width={isSidebarWide ? wideWidth : compactWidth}
                minWidth={isSidebarWide ? wideWidth : compactWidth}
                position='sticky'
                maxHeight='95vh'
                top={0}
                left={0}
                pl={1}
                sx={{
                    transition: 'all .2s ease-in'
                }}
            >
                <ProfileSidebar setIsSidebarWide={setIsSidebarWide} isSidebarWide={isSidebarWide} />
            </Stack>

            <Stack
                role='section'
                bgcolor='white'
            >
                <UnderNavBar />
                <Typography>
                    Welcome to profile page,
                </Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
                <Typography py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia libero eos tempore ullam adipisci assumenda, asperiores, quam quia, nobis odio veritatis voluptatibus. Molestias commodi assumenda impedit animi, possimus similique!</Typography>
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
                <Footer />
            </Stack>
        </Stack>
    )
}

export default Profile