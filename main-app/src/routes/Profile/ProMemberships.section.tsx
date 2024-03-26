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

const ProMemberships = ({ control }: Props) => {
    const name = 'proMemberships'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    const initObject = {
        id: uuidv4(),
        organization: '',
        description: '',
        visible: true,
    }

    return (
        <Box>
            <ProfileSectionTitle title='Professional memberships' subtitle='Optional section. A space to provide the name and description of the professional organizations you participate in.' />
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
                                    <Grid xs={12}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.organization`}
                                            label='Organization name'
                                            placeholder="e.g. UI / UX Comunity Amsterdam"
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
                        itemToAdd={'professional membership ( optional )'}
                        description={'Participations in professional organizations relevant to your career.'}
                    />
                </Box>
            </Stack>

        </Box>
    )
}

export default ProMemberships