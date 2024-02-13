import { Box, Grid, Typography } from "@mui/joy"
import { UserProfile } from "../../data/userProfileTypes"

import InputBlock from "../../components/input-block.tsx/InputBlock.component"
import { countriesList } from "../../data/countriesList"

import AutocompleteStyled from "../../components/autocomplete-styled/AutocompleteStyled.component"
import InputProfile from "../../components/input-profile/InputProfile.component"

type Props = {
    draftProfile: UserProfile;
    handleAutocoplete: (value: string, section: string, inputKey: string) => void
    handleProfile: (e: React.ChangeEvent<HTMLInputElement>, section: string) => void
    updateCurrentSection: (value: string, section: string, inputKey: string,) => void
    setDraftProfile: React.Dispatch<React.SetStateAction<UserProfile>>
}

const ProfileGeneral = ({ draftProfile, handleAutocoplete, handleProfile, updateCurrentSection }: Props) => {

    const section = 'general'

    const {
        firstName,
        lastName,
        city,
        country,
        email,
        phoneNumber,
        postCode } = draftProfile[section]

    // const handleGeneralProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.currentTarget.name, e.currentTarget.value)
    //     setDraftProfile((state) => ({
    //         ...state,
    //         general: {
    //             ...state.general,
    //             [e.currentTarget.name]: e.currentTarget.value
    //         }
    //     }));
    // };


    // const updateCurrentSection = (value: string, key: string) => {
    //     setDraftProfile((state) => ({
    //         ...state,
    //         general: {
    //             ...state.general,
    //             [key]: value
    //         }
    //     }));
    // }

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
                            onChange={(e) => handleProfile(e, section)}
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
                            onChange={(e) => handleProfile(e, section)}
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
                            onChange={(e) => handleProfile(e, section)}
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
                            onChange={(e) => handleProfile(e, section)}
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

                <Grid xs={12} md={6}>
                    <InputBlock title='Phone number' value={phoneNumber} section={section} inputKey='phoneNumber' updateCurrentSection={updateCurrentSection}>
                        <InputProfile
                            required
                            autoComplete='off'
                            name='phoneNumber'
                            placeholder='Phone number'
                            size='lg'
                            variant="outlined"
                            color='neutral'
                            value={phoneNumber}
                            onChange={(e) => handleProfile(e, section)}
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
                            onChange={(e) => handleProfile(e, section)}
                        />
                    </InputBlock>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfileGeneral