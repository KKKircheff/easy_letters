import { Box, Grid } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { languageLevels } from "../../data/languageLevels"
import { v4 as uuidv4 } from 'uuid';
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"
import FieldButtonGroup from "../../components/buttons/field-button-group/FieldButtonGroup"

type Props = {
    control: Control<UserProfile>
}

const Languages = ({ control }: Props) => {
    const name = 'languages';
    const { fields, append, remove } = useFieldArray({
        control,
        name
    });

    return (
        <Box>
            <ProfileSectionTitle title='Languages' subtitle='Add all languages you are skilled in and set the proficiency level' />
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
                                        name={`languages.${index}.language`}
                                        label=''
                                        required={true}
                                        placeholder='Language'
                                    />
                                    <FormInputAutocomplete
                                        options={languageLevels}
                                        control={control}
                                        name={`languages.${index}.level`}
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
                    onClick={() => append({ id: uuidv4(), language: '', level: 'beginner', visible: true })}>
                    <AddNew
                        itemToAdd={'language'}
                        description={'Choose your knowledge level.'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Languages