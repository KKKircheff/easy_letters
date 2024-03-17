import { Box, Grid, Stack } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { v4 as uuidv4 } from 'uuid';
import FormInputTextarea from "../../components/form-inputs/FormInputTextarea.tsx/FormInputTextarea"
import RemoveButton from "../../components/buttons/remove-button/RemoveButton"
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"

type Props = {
    control: Control<UserProfile>
}

const CareerHistory = ({ control }: Props) => {
    const name = 'careerHistory'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    return (
        <Box>
            <ProfileSectionTitle title='Career history' subtitle='Please fill in your previous employed, self-employed positions or volunteer projects. Add additional info for the position in the description field if you think it is needed.' />
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
                                            name={`${name}.${index}.jobTitle`}
                                            label='Job Title'
                                            placeholder="e.g. Front-end Software Engineer"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.employer`}
                                            label='Employer '
                                            placeholder="e.g. Software Solutions B.V."
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.location`}
                                            label='Location'
                                            placeholder="e.g. Amsterdam, The Netherlands"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
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
                                            label='End date'
                                            name={`${name}.${index}.endDate`}
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
                        jobTitle: '',
                        employer: '',
                        location: '',
                        startDate: null,
                        endDate: null,
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

export default CareerHistory