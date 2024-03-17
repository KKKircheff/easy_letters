import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import { v4 as uuidv4 } from 'uuid';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"


type Props = {
    control: Control<UserProfile>
}

const ApplicationDocuments = ({ control }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'applicationDocs', // Replace with your field array name
    });

    return (
        <Box>
            <ProfileSectionTitle title='Application documents' subtitle='History collection of your already created application docs.' />
        </Box>
    )
}

export default ApplicationDocuments