import { Box, Typography } from "@mui/joy"
import { GeneralUserProfile } from "../../data/userProfileTypes"

type Props = {
    general: GeneralUserProfile
}

const ProfileGeneral = ({ general }: Props) => {
    return (
        <Box>
            <Typography>
                Hi, {general.firstName}
            </Typography>
        </Box>
    )
}

export default ProfileGeneral