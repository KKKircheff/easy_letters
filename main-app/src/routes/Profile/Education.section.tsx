import { Box, Grid, Stack, Typography } from "@mui/joy"
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

type Props = {
    control: Control<UserProfile>
}

const Education = ({ control }: Props) => {
    const name = 'education'
    const { fields, append, remove } = useFieldArray({
        control,
        name, // Replace with your field array name
    });

    return (
        <Box>
            <Typography level='h1' p={2}> Studies</Typography>
            <Typography level='h2' p={2}> Fill in you studies history.</Typography>
            <Stack maxWidth='1200px' spacing={2.5} textAlign='left' alignItems={'center'} px={2}>
                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <InputContainer>
                                <BackspaceIcon sx={{ color: 'danger.500', alignSelf: 'flex-end'!, fontSize: 'sm', cursor: 'pointer' }} onClick={() => remove(index)} />
                                <Grid container columns={12} key={field.id} spacing={2}>
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