import { Input, styled } from "@mui/joy";

import { InputProps } from "@mui/joy/Input";

interface FormInputProps extends InputProps {
    isOutlined?: boolean;
    readOnly?: boolean
}
const InputStyled = styled(Input)<FormInputProps>(({ theme, isOutlined, readOnly = false }) => ({
    backgroundColor: 'white',
    fontSize: theme.fontSize.md,
    fontWeight: 500,
    borderRadius: theme.radius.lg,
    color: theme.vars.palette.neutral[600],
    boxShadow: 'none',
    outline: isOutlined
        ? `1.5px solid ${theme.vars.palette.primary[500]}`
        : `0px solid transparent`,
    '&:focus-within': {
        outline: !readOnly && `1.5px solid ${theme.vars.palette.primary[500]}`,
        outlineOffset: '0px',
    },

    '&::before': {
        display: 'none',
    },
}))

export default InputStyled