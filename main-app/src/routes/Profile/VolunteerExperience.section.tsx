import { Box, Grid, Stack } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import { v4 as uuidv4 } from 'uuid';
import FormInputTextarea from "../../components/form-inputs/FormInputTextarea.tsx/FormInputTextarea"
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"
import FieldButtonGroup from "../../components/buttons/field-button-group/FieldButtonGroup"

type Props = {
    control: Control<UserProfile>
}

const VolunteerExperience = ({ control }: Props) => {
    const name = 'volunteerExperience'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    const initObject = {
        id: uuidv4(),
        organizationName: '',
        role: '',
        description: '',
        startDate: null,
        endDate: null,
        visible: true,
    }

    return (
        <Box>
            <ProfileSectionTitle title='Volunteer experiences' subtitle='Optional section. Add any volunteer experiences you consider relevant for your job applications.' />
            <Stack maxWidth='1200px' spacing={1.5} textAlign='left' alignItems={'center'} px={.75} mx='auto'>
                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <InputContainer key={field.id}>
                                <FieldButtonGroup
                                    control={control}
                                    name={`${name}.${index}.visible`}
                                    index={index}
                                    remove={remove}
                                />
                                <Grid container columns={12} spacing={2}>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.organizationName`}
                                            label='Personal project'
                                            placeholder="Title of the project"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.role`}
                                            label='Role '
                                            placeholder="e.g. Team leader"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <FormInputTextarea
                                            control={control}
                                            label='Description'
                                            name={`${name}.${index}.description`}
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
                                            name={`${name}.${index}.endDate`}
                                            required={true}
                                        />
                                    </Grid>
                                </Grid>
                            </InputContainer>
                        )
                    })
                    : null
                }
                <Box
                    width='100%'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => append(initObject)}>
                    <AddNew
                        itemToAdd={'volunteer experience ( optional )'}
                        description={'Add free style description.'}
                    />
                </Box>
            </Stack>

        </Box>
    )
}

export default VolunteerExperience