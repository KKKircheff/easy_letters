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

const Hobbies = ({ control }: Props) => {
    const name = 'hobbies'
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    const initObject = {
        id: uuidv4(),
        hobbieName: '',
        description: '',
        visible: true,
    }

    return (
        <Box>
            <ProfileSectionTitle title='Hobbies' subtitle='Optional section. Add some hobbies, in case you find them helpful with your job applications.' />
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
                                            name={`${name}.${index}.hobbieName`}
                                            label='Hobbie'
                                            placeholder="e.g. Cycling"
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <FormInputTextarea
                                            control={control}
                                            label='Hobbie description'
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
                        itemToAdd={'a hobbie ( optional )'}
                        description={'Hobbies that could contribute to your job application.'}
                    />
                </Box>
            </Stack>

        </Box>
    )
}

export default Hobbies