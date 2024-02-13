import { Input, styled } from "@mui/joy";

const InputProfile = styled(Input)(({ theme }) => ({
    backgroundColor: 'white',
    fontSize: theme.fontSize.md,
    fontWeight: 500,
    borderRadius: theme.radius.lg,
    color: theme.vars.palette.neutral[600],
    boxShadow: 'none',
    outline: `2px solid ${theme.vars.palette.primary[500]}`,
    '&:focus-within': {
        outline: `2px solid ${theme.vars.palette.primary[500]}`,
        outlineOffset: '0px',
    },

    '&::before': {
        display: 'none',
    },
}))

export default InputProfile