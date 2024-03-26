import { Box, Grid, Stack, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control } from "react-hook-form"
import InputContainer from "../../components/form-inputs/InputContainer"
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"
import FormInputTextarea from "../../components/form-inputs/FormInputTextarea.tsx/FormInputTextarea"


type Props = {
    control: Control<UserProfile>
}

const Summary = ({ control }: Props) => {
    const name = 'summary'

    return (
        <Box>
            <ProfileSectionTitle title='Summary' subtitle='Short professional summary about you. Click "Auto" button when your other data is filled in. You can also click "Check" to have assistance from AI' />
            <Stack maxWidth='1200px' spacing={1.5} textAlign='left' alignItems={'center'} px={.75} mx='auto'>
                <InputContainer>
                    <FormInputTextarea
                        control={control}
                        name={name}
                        label='Short summary'
                        minRows={3}
                        maxLenght={400}
                    />
                </InputContainer>
            </Stack>
        </Box>
    )
}

export default Summary