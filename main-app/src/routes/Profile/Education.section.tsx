import { Box, Grid, Stack } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { v4 as uuidv4 } from 'uuid';
import BackspaceIcon from '@mui/icons-material/Backspace';
import TextareaStyled from "../../components/form-inputs/FormInputTextarea.tsx/TextareaStyled"
import FormInputTextarea from "../../components/form-inputs/FormInputTextarea.tsx/FormInputTextarea"
import RemoveButton from "../../components/buttons/remove-button/RemoveButton"
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"

type Props = {
    control: Control<UserProfile>
}

const Education = ({ control }: Props) => {
    const name = 'education'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    return (
        <Box>
            <ProfileSectionTitle title='Education' subtitle='Fill in your education history. Add seprate record for each education school. ' />
            <Stack maxWidth='1200px' spacing={2.5} textAlign='left' alignItems={'center'} px={2}>
                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <InputContainer key={field.id}>
                                <RemoveButton onClick={() => remove(index)} />
                                <Grid container columns={12} spacing={2}>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.schoolName`}
                                            label='School name'
                                            placeholder="e.g Twente University"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.schoolLocation`}
                                            label='City and country '
                                            placeholder="e.g. Enschede, The Netherlands"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.fieldOfStudy`}
                                            label='Field of study'
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.degree`}
                                            label='Degree'
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            type='date'

                                            label='Start date'
                                            name={`${name}.${index}.startDate`}
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            type='date'
                                            label='Graduation date or empty'
                                            name={`${name}.${index}.graduationDate`}
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <FormInputTextarea
                                            control={control}
                                            label='Additional description'
                                            name={`${name}.${index}.description`}
                                        />
                                    </Grid>
                                    {/* <FormInputAutocomplete
                                        options={languageLevels}
                                        control={control}
                                        name={`languages.${index}.level`}
                                        label=''
                                        required={true}
                                    /> */}
                                </Grid>
                            </InputContainer>
                        )
                    })
                    : null
                }
                <Box
                    width='100%'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => append({
                        id: uuidv4(),
                        schoolName: '',
                        schoolLocation: '',
                        degree: '',
                        fieldOfStudy: '',
                        startDate: null,
                        graduationDate: null,
                        description: '',
                        visible: true
                    })}>
                    <AddNew
                        itemToAdd={'Education summary section'}
                        description={'Fill in your schools and degrees.'}
                    />
                </Box>
            </Stack>

        </Box>
    )
}

export default Education