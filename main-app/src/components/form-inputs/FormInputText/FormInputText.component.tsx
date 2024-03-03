import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { Path, Control, Controller } from "react-hook-form";
import { UserProfile } from '../../../data/userProfileTypes';
import InputStyled from './InputStyled';

type Props = {
    name: Path<UserProfile>;
    control: Control<UserProfile>
    label: string;
    placeholder?: string;
    readOnly?: boolean
}
const FormInputText = ({ name, control, label, readOnly = false, placeholder = label }: Props) => {

    return (

        <FormControl>
            <FormLabel sx={{ mb: 1, fontWeight: 600, }}>{label}</FormLabel>
            <Controller
                name={`${name}`}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <>
                        <InputStyled
                            error={!!error}
                            onChange={onChange}
                            onBlur={onChange}
                            value={value as string | null}
                            disabled={readOnly}
                            isOutlined={!value}
                            fullWidth
                            size="md"
                            variant="plain"
                            placeholder={placeholder}
                        />
                        <FormHelperText >{!!error ? error.message : null}</FormHelperText>
                    </>
                )}
            />
        </FormControl>
    )
}

export default FormInputText