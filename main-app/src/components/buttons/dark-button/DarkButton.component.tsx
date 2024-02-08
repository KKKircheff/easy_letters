
import { Button, styled } from "@mui/joy";

const DarkButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.vars.palette.neutral[800],
    borderRadius: theme.vars.radius.full,
    border: `2px solid ${theme.vars.palette.neutral[800]}`,
    fontSize: 'sm',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.neutral[50],
    padding: '10px 30px',
    transition: 'all .3s easy-in',
    '&:hover': {
        backgroundColor: theme.vars.palette.neutral[50],
        border: `2px solid ${theme.vars.palette.neutral[400]}`,
        color: theme.vars.palette.neutral[600],
    },
}))

export default DarkButton