import { Box, Button, Grid, Typography, useTheme } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"
import { countriesList } from "../../data/countriesList"

import { Control, useFieldArray } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { useUserContext } from "../../context/UserContext"

type Props = {
    control: Control<UserProfile>
}

const ProfileGeneral = ({ control }: Props) => {

    const { userProfile } = useUserContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'webLinks', // Replace with your field array name
    });

    const { webLinks } = userProfile;

    return (
        <Box>
            <Typography level='h1' p={2}> General contact information and web links</Typography>
            <Typography level='h2' p={2}> Please fill in all necessary fields</Typography>
            <Grid
                container
                columns={12}
                maxWidth='1200px'
                mx='auto'
                spacing={2.5}
                textAlign='left'
            >
                <Grid xs={12} md={6}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='general.firstName'
                            label='First name'
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='general.lastName'
                            label='Last name'
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='admin.email'
                            label='Email'
                            readOnly={true}
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='general.phoneNumber'
                            label='Phone number'
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={3}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='general.city'
                            label='City'
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={3}>
                    <InputContainer>
                        <FormInputText
                            control={control}
                            name='general.postCode'
                            label='Postal code'
                        />
                    </InputContainer>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputContainer>
                        <FormInputAutocomplete
                            control={control}
                            name='general.country'
                            label='Country of residence'
                            options={countriesList}
                        />
                    </InputContainer>
                </Grid>

                {fields.length ?
                    fields.map((field, index) => {
                        return (
                            <Grid key={field.id} xs={12} md={6}>
                                <InputContainer>
                                    <FormInputText
                                        control={control}
                                        name={`webLinks.${index}.media`}
                                        label=''
                                        required={true}
                                    />
                                    <FormInputText
                                        control={control}
                                        name={`webLinks.${index}.link`}
                                        label=''
                                        required={true}
                                    />
                                    <Button variant='outlined' color='danger' size='sm' type="button" sx={{ marginLeft: 'auto' }} onClick={() => remove(index)}>
                                        Remove
                                    </Button>
                                </InputContainer>
                            </Grid>
                        )
                    })
                    : null
                }

                <Grid
                    xs={12} md={6} sx={{ cursor: 'pointer' }}
                    onClick={() => append({ media: '', link: '' })}>
                    <AddNew
                        itemToAdd={'link'}
                        description={'e.g LinkedIn, Instagram, Youtube, Github, Portfolio Website or other links.'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfileGeneral