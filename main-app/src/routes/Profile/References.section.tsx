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

const References = ({ control }: Props) => {
    const name = 'references'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    const initObject = {
        id: uuidv4(),
        company: '',
        name: '',
        contact: null,
        visible: true,
    }

    return (
        <Box>
            <ProfileSectionTitle title='References' subtitle='Optional section. Add referals like people, company departments or ex-employeers that could provide detailed information about you. ' />
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
                                            name={`${name}.${index}.company`}
                                            label='Company name'
                                            placeholder="e.g Zara "
                                            required={true}
                                        />
                                    </Grid>

                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            name={`${name}.${index}.name`}
                                            label='Contact person '
                                            placeholder="e.g. John Smith"
                                            required={true}
                                        />
                                    </Grid>

                                    <Grid xs={12} md={6}>
                                        <FormInputText
                                            control={control}
                                            label='Contact info'
                                            name={`${name}.${index}.contact`}
                                            placeholder='email, phone number, etc'
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
                        itemToAdd={'referal ( optional )'}
                        description={'Add referal who could provide information relevant for your career.'}
                    />
                </Box>
            </Stack>

        </Box>
    )
}

export default References