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
    required?: boolean
}
const FormInputAutocomplete = ({ name, control, label, options, readOnly = false, placeholder = label, required = false }: Props) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.blur();
        }
    };

    return (
        <FormControl>
            <FormLabel sx={{ mb: 1, fontWeight: 600 }}>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? "Required field" : undefined
                }}
                render={({ field: { onChange, value }, fieldState: { error }, formState: { errors } }) => (
                    <>
                        <AutocompleteStyled
                            options={options}
                            isOutlined={!value}
                            placeholder={placeholder}
                            disabled={readOnly}
                            onChange={(event, newValue) => {
                                onChange(newValue);
                            }}
                            onKeyDown={handleKeyDown}
                            value={value ? value : ''}
                            fullWidth
                            clearOnBlur={true}
                            clearOnEscape={true}
                            sx={{ cursor: 'pointer' }}
                            size="sm"
                            variant="plain"
                        />
                        {errors && <FormHelperText>{error && error.message}</FormHelperText>}
                    </>
                )}
            />
        </FormControl>
    );
};

export default FormInputAutocomplete