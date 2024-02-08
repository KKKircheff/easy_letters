import { Input, styled } from "@mui/joy";

const StyledInput = styled(Input)(({ theme }) => ({
    backgroundColor: 'transparent',
    fontSize: '.9rem',
    fontWeight: '500',
    borderRadius: theme.radius.lg,
    color: theme.vars.palette.neutral[600],
    '&:focus-within': {
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
        outline: `1px solid ${theme.vars.palette.primary[500]}`,
        outlineOffset: '0px',
    },

    '&::before': {
        display: 'none',
    },
}))

export default StyledInput