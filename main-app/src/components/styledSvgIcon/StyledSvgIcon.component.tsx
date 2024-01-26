import { SvgIcon, styled } from "@mui/joy";

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
    backgroundImage: `linear-gradient(45deg ,${theme.vars.palette.secondary[500]},${theme.vars.palette.primary[500]} )`!,
    WebkitBackgroundClip: 'text'!,
    WebkitTextFillColor: 'transparent'!,
}));

export default StyledSvgIcon