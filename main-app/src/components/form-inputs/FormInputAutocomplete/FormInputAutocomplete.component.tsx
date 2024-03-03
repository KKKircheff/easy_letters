import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { Path, Control, Controller } from "react-hook-form";
import { UserProfile } from '../../../data/userProfileTypes';
import AutocompleteStyled from './AutocompleteStyled';

type Props = {
    name: Path<UserProfile>;
    control: Control<UserProfile>
    label: string;
    options: string[];
    placeholder?: string;
    readOnly?: boolean
}
const FormInputAutocomplete = ({ name, control, label, options, readOnly = false, placeholder = label }: Props) => {

    return (
        <FormControl>
            <FormLabel sx={{ mb: 1, fontWeight: 600, }}>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <>
                        <AutocompleteStyled
                            options={options}
                            onChange={(event, newValue) => {
                                onChange(newValue);
                            }}
                            onBlur={(event, newValue) => {
                                onChange(event.target.value, newValue)
                            }}
                            value={value ? value : ''}
                            fullWidth
                            size="md"
                            variant="plain"
                            isOutlined={!value}
                            placeholder={placeholder}
                            disabled={readOnly}
                        />
                        <FormHelperText >{!!error ? error.message : null}</FormHelperText>
                    </>
                )}
            />
        </FormControl>
    )
}

export default FormInputAutocomplete