import { Box, Grid, Typography, useTheme } from "@mui/joy"
import { UserProfile, SectionKeys, ArraySectionsValues, WebLink, General, Admin } from "../../data/userProfileTypes"

import InputBlock from "../../components/input-block/InputBlock.component"
import { countriesList } from "../../data/countriesList"

import AutocompleteStyled from "../../components/autocomplete-styled/AutocompleteStyled.component"
import InputProfile from "../../components/input-profile/InputProfile.component"
import AddNew from "../../components/add-new/AddNew.component"
import InputArrayBlock from "../../components/input-array-block/InputArrayBlock.component"
import { useState } from "react"
import { useUserContext } from "../../context/UserContext"
import { Control, useForm } from "react-hook-form"
import FormInput from "../../components/inputsStyled/FormInput.component"
import FormInputBlock from "../../components/InputsUI/FormInputBlock.component"

const ProfileGeneral = () => {

    const c = useTheme().palette
    const { userProfile } = useUserContext()
    const { register, formState: { errors } } = useForm<UserProfile>({
        defaultValues: { ...userProfile }
    });
    const adminSection = 'admin'
    const section = 'general'
    const arraySection = 'webLinks'

    // const {
    //     email,
    // } = register.userProfile.admin

    // const {
    //     firstName,
    //     lastName,
    //     city,
    //     country,
    //     phoneNumber,
    //     postCode,
    // } = register.general

    // const webLinks = register.webLinks;

    const newWebLink: WebLink = {
        media: '',
        link: ''
    }

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
                    <FormInputBlock label={'First Name'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.firstName')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <FormInputBlock label={'Last Name'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.lastName')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <FormInputBlock label={'Email'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            readOnly={true}
                            isOutlined={false}
                            {...register('admin.email')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <FormInputBlock label={'Phone Number'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.phoneNumber')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={3}>
                    <FormInputBlock label={'City'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.city')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={3}>
                    <FormInputBlock label={'Postal code'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.postCode')}
                        />
                    </FormInputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <FormInputBlock label={'Country of residence'} >
                        <FormInput
                            size='md'
                            variant="plain"
                            isOutlined={false}
                            {...register('general.country')}
                        />
                    </FormInputBlock>
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

                {/* {isAddInProgress
                    ? null
                    : <Grid
                        xs={12} md={6} sx={{ cursor: 'pointer' }}
                        onClick={addNewArraySectionRecord}>
                        <AddNew
                            itemToAdd={'link'}
                            description={'e.g LinkedIn, Instagram, Youtube, Github, Portfolio Website or other links.'}
                        />
                    </Grid>
                } */}
            </Grid>
        </Box>
    )
}

export default ProfileGeneral