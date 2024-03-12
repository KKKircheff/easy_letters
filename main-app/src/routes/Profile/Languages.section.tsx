import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { languageLevels } from "../../data/languageLevels"
import { v4 as uuidv4 } from 'uuid';
import BackspaceIcon from '@mui/icons-material/Backspace';

type Props = {
    control: Control<UserProfile>
}

const Languages = ({ control }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'languages',
    });

    return (
        <Box>
            <Typography level='h1' p={2}> Languages</Typography>
            <Typography level='h2' p={2}> Please fill the languages you can use and leve</Typography>
            <Grid
                container
                columns={12}
                maxWidth='1200px'
                mx='auto'
                spacing={2.5}
                textAlign='left'
            >

                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <Grid key={field.id} xs={12} md={6}>
                                <InputContainer>
                                    <BackspaceIcon sx={{ color: 'danger.500', alignSelf: 'flex-end'!, fontSize: 'sm', cursor: 'pointer' }} onClick={() => remove(index)} />
                                    <FormInputText
                                        control={control}
                                        name={`languages.${index}.language`}
                                        label=''
                                        required={true}
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