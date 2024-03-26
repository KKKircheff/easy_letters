import { Box, Grid } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import { v4 as uuidv4 } from 'uuid';
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"
import FieldButtonGroup from "../../components/buttons/field-button-group/FieldButtonGroup"


type Props = {
    control: Control<UserProfile>
}

const Skills = ({ control }: Props) => {
    const name = 'skills'
    const { fields, append, remove } = useFieldArray({
        control,
        name
    });

    return (
        <Box>
            <ProfileSectionTitle title='Skills' subtitle='Please fill in your skills. For example describe with 1-3 words your relevant professional skills - technical skills, soft skills, creativeness, anlalitical, physical, industry specific skills and so on. E.g. -Front-end, React JS, SCSS, Inspired coder, Fast learner, Agile, Team Player, Creative, Extrovert, Fast learner, etc.' />
            <Grid
                container
                columns={12}
                maxWidth='1200px'
                mx='auto'
                spacing={1.5}
                textAlign='left'
            >

                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <Grid key={field.id} xs={12} md={6}>
                                <InputContainer>
                                    <FieldButtonGroup
                                        control={control}
                                        name={`${name}.${index}.visible`}
                                        index={index}
                                        remove={remove}
                                    />
                                    <FormInputText
                                        control={control}
                                        name={`skills.${index}.skill`}
                                        label=''
                                        placeholder='Add new skill'
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