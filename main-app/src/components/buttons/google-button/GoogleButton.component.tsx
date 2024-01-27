
import { Button, styled } from "@mui/joy";

const GoogleButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.vars.radius.full,
    border: `2px solid ${theme.vars.palette.neutral[300]}`,
    fontSize: 'medium',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.neutral[600],
    padding: '4px',
    transition: 'all .3s easy-in',
    '&:hover': {
        backgroundColor: theme.vars.palette.neutral[200],
        border: `2px solid ${theme.vars.palette.neutral[300]}`,
        // color: 'white',
        color: theme.vars.palette.neutral[600],
    },
}))

export default GoogleButton