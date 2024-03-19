import { Box, Grid } from "@mui/joy"
import { ArraySectionsKeys, ArraySectionsValues, UserProfile } from "../../data/userProfileTypes"
import { countriesList } from "../../data/countriesList"

import { Control, useFieldArray, } from "react-hook-form"
import AddNew from "../../components/add-new/AddNew.component"
import InputContainer from "../../components/form-inputs/InputContainer"
import FormInputText from "../../components/form-inputs/FormInputText/FormInputText.component"
import FormInputAutocomplete from "../../components/form-inputs/FormInputAutocomplete/FormInputAutocomplete.component"
import { useUserContext } from "../../context/UserContext"
import { v4 as uuidv4 } from 'uuid';
import ProfileSectionTitle from "../../components/ProfileSectionTitle/ProfileSectionTitle.component"
import FieldButtonGroup from "../../components/buttons/field-button-group/FieldButtonGroup"

type Props = {
    control: Control<UserProfile>
}

const General = ({ control }: Props) => {

    const name = 'webLinks'

    const { fields, append, update, remove } = useFieldArray<UserProfile>({
        control,
        name
    });

    return (
        <Box>
            <ProfileSectionTitle title='General information' subtitle='Please fill in your general profile data and URLs to LinkedIn profile, personal website or other relevant professional web resources you would like to present in your resume' />
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
                                    <FieldButtonGroup
                                        control={control}
                                        name={`${name}.${index}.visible`}
                                        index={index}
                                        remove={remove}
                                    />
                                    <FormInputText
                                        control={control}
                                        name={`${name}.${index}.media`}
                                        label=''
                                        required={true}
                                    />
                                    <FormInputText
                                        control={control}
                                        name={`${name}.${index}.link`}
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
                    onClick={() => append({ id: uuidv4(), media: '', link: '', visible: true })}>
                    <AddNew
                        itemToAdd={'link'}
                        description={'e.g LinkedIn, Instagram, Youtube, Github, Portfolio Website or other links.'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default General