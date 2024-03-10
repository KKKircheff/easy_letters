import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import { v4 as uuidv4 } from 'uuid';
import BackspaceIcon from '@mui/icons-material/Backspace';


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
            <Typography level='h1' p={2}> Application documents</Typography>
            <Typography level='h2' p={2}>Under construction...</Typography>
        </Box>
    )
}

export default ApplicationDocuments