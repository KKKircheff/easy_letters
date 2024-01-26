import theme from './theme';

export const iconGradientStyles = {
    scondaryPrimary: {
        backgroundImage: `linear-gradient(45deg ,${theme.vars.palette.secondary[500]},${theme.vars.palette.primary[500]} )`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    dangerWarning: {
        backgroundImage: `linear-gradient(45deg ,${theme.vars.palette.danger[500]},${theme.vars.palette.warning[500]} )`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    primaryWarning: {
        backgroundImage: `linear-gradient(45deg ,${theme.vars.palette.primary[500]},${theme.vars.palette.warning[500]} )`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
};
// backgroundImage: 'linear-gradient(45deg, #09009f, #00ff95 80%)'
// backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)'
