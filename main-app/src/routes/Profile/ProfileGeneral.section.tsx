import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile, SectionKeys, ArraySectionsValues, WebLink } from "../../data/userProfileTypes"

import InputBlock from "../../components/input-block/InputBlock.component"
import { countriesList } from "../../data/countriesList"

import AutocompleteStyled from "../../components/autocomplete-styled/AutocompleteStyled.component"
import InputProfile from "../../components/input-profile/InputProfile.component"
import AddNew from "../../components/add-new/AddNew.component"
import InputArrayBlock from "../../components/input-array-block/InputArrayBlock.component"
import { useState } from "react"



type Props = {
    draftProfile: UserProfile;
    setDraftProfile: React.Dispatch<React.SetStateAction<UserProfile>>

    isAddInProgress: boolean;
    setIsAddInProgress: React.Dispatch<React.SetStateAction<boolean>>

    handleAutocoplete: (value: string, section: string, inputKey: string) => void
    handleProfileOnChange: (e: React.ChangeEvent<HTMLInputElement>, section: string) => void
    updateCurrentSection: (value: string, section: string, inputKey: string,) => void

    handleProfileArraySectionOnChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        currentSection: SectionKeys,
        currentIndex: number) => void
    addArraySectionElement: (section: SectionKeys, value: ArraySectionsValues) => void
    deleteArraySectionElement: (section: SectionKeys, deleteIndex: number) => void
}

const ProfileGeneral = ({
    draftProfile,
    isAddInProgress,
    setIsAddInProgress,
    handleAutocoplete,
    handleProfileOnChange,
    updateCurrentSection,
    handleProfileArraySectionOnChange,
    addArraySectionElement,
    deleteArraySectionElement
}: Props) => {

    const adminSection = 'admin'
    const section = 'general'
    const arraySection = 'webLinks'

    const {
        email,
    } = draftProfile.admin

    const {
        firstName,
        lastName,
        city,
        country,
        phoneNumber,
        postCode,
    } = draftProfile[section]

    const webLinks = draftProfile[arraySection];

    const newWebLink: WebLink = {
        media: '',
        link: ''
    }

    const lastIndex = webLinks ? webLinks.length : 0

    const addNewArraySectionRecord = () => {
        addArraySectionElement('webLinks', newWebLink)
        setIsAddInProgress(true);
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
                    <InputBlock title='First name' value={firstName} section={section} inputKey='firstName' updateCurrentSection={updateCurrentSection}>
                        <InputProfile
                            required
                            autoComplete='off'
                            name='firstName'
                            size='md'
                            variant="outlined"
                            color='neutral'
                            value={firstName}
                            onChange={(e) => handleProfileOnChange(e, section)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputBlock title='Last Name' value={lastName} section={section} inputKey='lastName' updateCurrentSection={updateCurrentSection}>
                        <InputProfile
                            required
                            autoComplete='off'
                            name='lastName'
                            placeholder='name'
                            size='md'
                            variant="outlined"
                            color='neutral'
                            value={lastName}
                            onChange={(e) => handleProfileOnChange(e, section)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputBlock title='Email' value={email}>
                        <InputProfile
                            required
                            autoComplete='off'
                            type='email'
                            name='email'
                            size='md'
                            variant="outlined"
                            color='neutral'
                            value={email}
                        // onChange={(e) => handleProfileOnChange(e, adminSection)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputBlock title='Phone number' value={phoneNumber} section={section} inputKey='phoneNumber' updateCurrentSection={updateCurrentSection}>
                        <InputProfile
                            required
                            autoComplete='off'
                            name='phoneNumber'
                            placeholder='Phone number'
                            size='md'
                            variant="outlined"
                            color='neutral'
                            value={phoneNumber}
                            onChange={(e) => handleProfileOnChange(e, section)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={3}>
                    <InputBlock title='City' value={city} section={section} inputKey='city' updateCurrentSection={updateCurrentSection}>
                        <InputProfile
                            required
                            autoComplete='off'
                            name='city'
                            placeholder='Place of residance'
                            size='md'
                            variant="outlined"
                            color='neutral'
                            value={city}
                            onChange={(e) => handleProfileOnChange(e, section)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={3}>
                    <InputBlock title='Postal code' value={postCode} section={section} inputKey='postCode' updateCurrentSection={updateCurrentSection} >
                        <InputProfile
                            autoComplete='off'
                            name='postCode'
                            size='md'
                            placeholder='Postal code'
                            variant="outlined"
                            color='neutral'
                            value={postCode}
                            onChange={(e) => handleProfileOnChange(e, section)}
                        />
                    </InputBlock>
                </Grid>

                <Grid xs={12} md={6}>
                    <InputBlock title='Country of residence' value={country} section={section} inputKey='country' updateCurrentSection={updateCurrentSection}>
                        <AutocompleteStyled
                            options={countriesList}
                            name='country'
                            value={country ?? ''}
                            inputValue={country ?? ''}
                            onChange={(event, newValue) => handleAutocoplete(newValue, section, 'country')}
                            onInputChange={(event, newInputValue) => handleAutocoplete(newInputValue, section, 'country')}
                        />
                    </InputBlock>
                </Grid>

                {webLinks.length ?
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
                }

                {isAddInProgress
                    ? null
                    : <Grid
                        xs={12} md={6} sx={{ cursor: 'pointer' }}
                        onClick={addNewArraySectionRecord}>
                        <AddNew
                            itemToAdd={'link'}
                            description={'e.g LinkedIn, Instagram, Youtube, Github, Portfolio Website or other links.'}
                        />
                    </Grid>
                }
            </Grid>
        </Box>
    )
}

export default ProfileGeneral