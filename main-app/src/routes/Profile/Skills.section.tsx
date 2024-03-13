import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import { v4 as uuidv4 } from 'uuid';
import BackspaceIcon from '@mui/icons-material/Backspace';
import RemoveButton from "../../components/buttons/remove-button/RemoveButton"


type Props = {
    control: Control<UserProfile>
}

const Skills = ({ control }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'skills', // Replace with your field array name
    });

    return (
        <Box>
            <Typography level='h1' p={2}> Skills</Typography>
            <Typography level='h2' p={2}> Please add you skills</Typography>
            <Grid
                container
                columns={12}
                maxWidth='1200px'
                mx='auto'
                spacing={2.5}
                textAlign='left'
            >

                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <Grid key={field.id} xs={12} md={6}>
                                <InputContainer>
                                    <RemoveButton onClick={() => remove(index)} />
                                    <FormInputText
                                        control={control}
                                        name={`skills.${index}.skill`}
                                        label=''
                                        required={true}
                                    />
                                </InputContainer>
                            </Grid>
                        )
                    })
                    : null
                }

                <Grid
                    xs={12} md={12} sx={{ cursor: 'pointer' }}
                    onClick={() => append({ id: uuidv4(), skill: '', visible: true })}>
                    <AddNew
                        itemToAdd={'skill'}
                        description={'Add a skill. For example - technical skills, soft skills, etc ...'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills