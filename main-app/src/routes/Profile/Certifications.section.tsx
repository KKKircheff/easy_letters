import { Box, Grid, Stack } from "@mui/joy"
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

const Certifications = ({ control }: Props) => {
    const name = 'certifications'
    const initObject = {
        id: uuidv4(),
        certificationName: '',
        issueingOrganization: '',
        date: '',
        visible: true
    }
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    return (
        <Box>
            <ProfileSectionTitle
                title='Certification'
                subtitle='Optional section. Add any certifications you have achieved, only if you find them relevant about your work applications' />
            <Stack maxWidth='1200px' spacing={2.5} textAlign='left' alignItems={'center'} px={2}>
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
                                            name={`${name}.${index}.certificationName`}
                                            label='Certification'
                                            placeholder="e.g. Name"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.issueingOrganization`}
                                            label='Issue organization '
                                            placeholder="e.g. Software Solutions B.V."
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            type='date'
                                            label='Issue date'
                                            name={`${name}.${index}.date`}
                                            required={true}
                                        />
                                    </Grid>
                                </Grid>
                            </InputContainer>
                        )
                    })
                    : null
                }

                <Box width='100%' sx={{ cursor: 'pointer' }} onClick={() => append(initObject)}>
                    <AddNew
                        itemToAdd={'Certificate ( Optional )'}
                        description={'Driving licences, language diploams, etc.'}
                    />
                </Box>
            </Stack>
        </Box>
    )
}

export default Certifications