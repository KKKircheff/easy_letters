import { FormControl, FormHelperText, FormLabel, TextareaProps } from '@mui/joy'
import { Path, Control, Controller } from "react-hook-form";
import { UserProfile } from '../../../data/userProfileTypes';
import TextareaStyled from './TextareaStyled';

type Props = {
    name: Path<UserProfile>;
    control: Control<UserProfile>
    label: string;
    placeholder?: string;
    readOnly?: boolean
    required?: boolean
    maxLenght?: number
} & TextareaProps

const FormInputTextarea = ({
    name,
    control,
    label, readOnly = false,
    placeholder = label,
    required = false,
    maxLenght = 260,
    ...otherProps
}: Props) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
                        <TextareaStyled
                            onChange={(event) => {
                                const newValue = event.target.value.slice(0, maxLenght);
                                onChange(newValue)
                            }}
                            onBlur={(event) => {
                                onChange(event.target.value)
                            }}
                            onKeyDown={handleKeyDown}
                            value={value ? value as string : ''}
                            disabled={readOnly}
                            isOutlined={!value}
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

export default FormInputTextarea