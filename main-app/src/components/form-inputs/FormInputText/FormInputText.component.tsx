import { FormControl, FormHelperText, FormLabel, InputProps } from '@mui/joy'
import { Path, Control, Controller } from "react-hook-form";
import { UserProfile } from '../../../data/userProfileTypes';
import InputStyled from './InputStyled';

type Props = {
    name: Path<UserProfile>;
    control: Control<UserProfile>
    label: string;
    placeholder?: string;
    readOnly?: boolean
    required?: boolean
} & InputProps

const FormInputText = ({
    name,
    control,
    label, readOnly = false,
    placeholder = label,
    required = false,
    ...otherProps
}: Props) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.blur();
        }
    };


    return (
        <FormControl>
            <FormLabel sx={{ mb: 1, fontWeight: 600, }}>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={
                    {
                        required: required ? "Required field" : undefined
                    }}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState: { errors },
                }) => (
                    <>
                        <InputStyled
                            onChange={(event) => {
                                onChange(event.target.value)
                            }}
                            onBlur={(event) => {
                                onChange(event.target.value)
                            }}
                            onKeyDown={handleKeyDown}
                            value={value ? value as string : ''}
                            disabled={readOnly}
                            isOutlined={!value}
                            fullWidth
                            size="md"
                            variant="plain"
                            placeholder={placeholder}
                            sx={{ cursor: 'pointer' }}
                            {...otherProps}
                        />
                        {errors && <FormHelperText > {error && error.message}</FormHelperText>}
                    </>
                )}
            />
        </FormControl>
    )
}

export default FormInputText