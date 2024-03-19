import { Switch, Typography } from "@mui/joy"
import { Controller } from "react-hook-form"

const VisibleToggleButton = ({ name, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState: { errors },
            }) => (
                <>
                    <Typography fontSize='xs' fontWeight='500'>{value ? 'ACTIVE' : 'HIDDEN'}</Typography>
                    <Switch size='sm' checked={!!value}
                        onChange={() => {
                            onChange(!value)
                        }} />
                </>
            )}
        />
    )
}

export default VisibleToggleButton