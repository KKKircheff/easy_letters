import { Textarea, TextareaProps, styled } from "@mui/joy";


interface FormInputProps extends TextareaProps {
    isOutlined?: boolean;
    readOnly?: boolean
}
const TextareaStyled = styled(Textarea)<FormInputProps>(({ theme, isOutlined = false, readOnly = false }) => ({
    backgroundColor: theme.vars.palette.neutral[100],
    fontSize: theme.fontSize.sm,
    fontWeight: 500,
    borderRadius: theme.radius.md,
    color: theme.vars.palette.neutral[600],
    boxShadow: 'none',
    minHeight: '30px',
    paddingX: 5,
    borderBottom: isOutlined ?
        `1px solid ${theme.vars.palette.primary[500]}`
        : `0px solid ${theme.vars.palette.neutral[200]}`,
    outline: isOutlined
        ? `1px solid ${theme.vars.palette.neutral[200]}`
        : `1px solid ${theme.vars.palette.neutral[200]}`,
    '&:focus-within': {
        borderBottom: !readOnly && `1.5px solid ${theme.vars.palette.primary[500]}`,
        outlineOffset: '0px',
    },
    '&::before': {
        display: 'none',
    },
    '&::selection': {
        backgroundColor: 'red',
        color: 'green',
    },
}))

export default TextareaStyled