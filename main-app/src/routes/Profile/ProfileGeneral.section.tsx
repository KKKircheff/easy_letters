import { Box, Grid, Typography, useTheme } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"
import { countriesList } from "../../data/countriesList"

import { useUserContext } from "../../context/UserContext"
import { useForm } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"

const ProfileGeneral = () => {

    const c = useTheme().palette
    const { userProfile } = useUserContext()
    const { register, control, formState: { errors } } = useForm<UserProfile>({
        defaultValues: { ...userProfile }
    });

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


                {/* {webLinks.length ?
                    webLinks.map((webLink, index) => {
                        return (
                            <Grid key={index} xs={12} md={6}>
                                <InputArrayBlock
                                    index={index}
                                    title='Web link'
                                    value={webLink}
                                    section={arraySection}
                                    inputKey='webLinks'
                                    deleteArraySectionElement={deleteArraySectionElement}>

                                    <InputProfile
                                        autoComplete='off'
                                        name='media'
                                        size='md'
                                        placeholder='Name'
                                        variant="outlined"
                                        color='neutral'
                                        value={webLink.media}
                                        onChange={(e) => handleProfileArraySectionOnChange(e, arraySection, index)}
                                    />
                                    <InputProfile
                                        autoComplete='off'
                                        name='link'
                                        size='md'
                                        placeholder='Web link'
                                        variant="outlined"
                                        color='neutral'
                                        value={webLink.link}
                                        onChange={(e) => handleProfileArraySectionOnChange(e, arraySection, index)}
                                    />
                                </InputArrayBlock>
                            </Grid>
                        )
                    })
                    : null
                } */}
                <Grid
                    xs={12} md={6} sx={{ cursor: 'pointer' }}
                    onClick={() => console.log('clicked')}>
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