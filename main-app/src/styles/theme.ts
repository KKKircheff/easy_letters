import {extendTheme, PaletteRange} from '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface ColorPalettePropOverrides {
        // apply to all Joy UI components that support `color` prop
        secondary: true;
    }

    interface Palette {
        // this will make the node `secondary` configurable in `extendTheme`
        secondary: PaletteRange;
    }

    interface Radius {
        full: string;
    }

    interface FontSize {
        mediumTitle: string;
        largeTitle: string;
        xLargeTitle: string;
        xxLargeTitle: string;
        xxxLargeTitle: string;
    }
}

export const theme = extendTheme({
    // fontFamily: {
    //     body: 'Open Sans, sans-serif',
    //     display: 'Open Sans, sans-serif',
    //     code: 'Open Sans, sans-serif',
    //     fallback: 'sans-serif',
    // },
    fontFamily: {
        body: 'Montserrat',
        display: 'Montserrat',
        code: 'Montserrat',
        fallback: 'sans-serif',
    },

    fontSize: {
        mediumTitle: '1.7rem',
        largeTitle: '2rem',
        xLargeTitle: '2.3rem',
        xxLargeTitle: '2.7rem',
        xxxLargeTitle: '3rem',
    },

    radius: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
        full: '50px',
    },

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    '50': '#e1f4f4',
                    '100': '#c3eae9',
                    '200': '#a3dfde',
                    '300': '#80d4d3',
                    '400': '#58c9c9',
                    '500': '#04BEBE',
                    '600': '#009898',
                    '700': '#007374',
                    '800': '#005052',
                    '900': '#002f33',
                    solidHoverBg: 'var(--joy-palette-primary-400)',
                },
                secondary: {
                    50: '#dadeec',
                    100: '#b6bfd9',
                    200: '#92a0c6',
                    300: '#6d83b4',
                    400: '#4567a1',
                    500: '#004C8F',
                    600: '#003a7a',
                    700: '#002966',
                    800: '#001952',
                    900: '#00013f',
                    solidColor: 'var(--joy-palette-secondary-50)',
                    solidBg: 'var(--joy-palette-secondary-400)',
                    solidHoverBg: 'var(--joy-palette-secondary-700)',
                    solidActiveBg: 'var(--joy-palette-secondary-500)',
                    solidDisabledColor: 'var(--joy-palette-neutral-500)',
                    solidDisabledBg: 'var(--joy-palette-neutral-800)',
                    outlinedBorder: 'var(--joy-palette-secondary-500)',
                    outlinedColor: 'var(--joy-palette-secondary-700)',
                    outlinedActiveBg: 'var(--joy-palette-secondary-100)',
                    softColor: 'var(--joy-palette-secondary-800)',
                    softBg: 'var(--joy-palette-secondary-200)',
                    softActiveBg: 'var(--joy-palette-secondary-300)',
                    plainColor: 'var(--joy-palette-secondary-700)',
                    plainActiveBg: 'var(--joy-palette-secondary-100)',
                },
                // neutral: {
                //     50: '#fafafa',
                //     100: '#f4f4f5',
                //     200: '#e4e4e7',
                //     300: '#d4d4d8',
                //     400: '#a1a1aa',
                //     500: '#71717a',
                //     600: '#52525b',
                //     700: '#3f3f46',
                //     800: '#27272a',
                //     900: '#18181b',
                // },
                danger: {
                    '50': '#ffdfd4',
                    '100': '#ffbfab',
                    '200': '#ff9e83',
                    '300': '#ff7b5b',
                    '400': '#ff5335',
                    '500': '#FF0505',
                    '600': '#db0000',
                    '700': '#b70000',
                    '800': '#960000',
                    '900': '#5b0000',
                },
                success: {
                    '50': '#e4fbdc',
                    '100': '#c9f7b9',
                    '200': '#abf296',
                    '300': '#89ed72',
                    '400': '#5fe74a',
                    '500': '#05E105',
                    '600': '#00b400',
                    '700': '#008800',
                    '800': '#005e00',
                    '900': '#003800',
                    solidHoverBg: 'var(--joy-palette-success-400)',
                },
                warning: {
                    '50': '#fff4e4',
                    '100': '#ffeac8',
                    '200': '#ffdfad',
                    '300': '#ffd592',
                    '400': '#ffca77',
                    '500': '#ffc05a',
                    '600': '#e99900',
                    '700': '#d38700',
                    '800': '#bd7600',
                    '900': '#a86400',
                    solidHoverBg: 'var(--joy-palette-warning-400)',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    '50': '#e1f4f4',
                    '100': '#c3eae9',
                    '200': '#a3dfde',
                    '300': '#80d4d3',
                    '400': '#58c9c9',
                    '500': '#04BEBE',
                    '600': '#009898',
                    '700': '#007374',
                    '800': '#005052',
                    '900': '#002f33',
                },
                secondary: {
                    50: '#dadeec',
                    100: '#b6bfd9',
                    200: '#92a0c6',
                    300: '#6d83b4',
                    400: '#4567a1',
                    500: '#004C8F',
                    600: '#003a7a',
                    700: '#002966',
                    800: '#001952',
                    900: '#00013f',
                    solidColor: 'var(--joy-palette-secondary-50)',
                    solidBg: 'var(--joy-palette-secondary-400)',
                    solidHoverBg: 'var(--joy-palette-secondary-700)',
                    solidActiveBg: 'var(--joy-palette-secondary-500)',
                    solidDisabledColor: 'var(--joy-palette-neutral-500)',
                    solidDisabledBg: 'var(--joy-palette-neutral-800)',
                    outlinedBorder: 'var(--joy-palette-secondary-500)',
                    outlinedColor: 'var(--joy-palette-secondary-700)',
                    outlinedActiveBg: 'var(--joy-palette-secondary-100)',
                    softColor: 'var(--joy-palette-secondary-800)',
                    softBg: 'var(--joy-palette-secondary-200)',
                    softActiveBg: 'var(--joy-palette-secondary-300)',
                    plainColor: 'var(--joy-palette-secondary-700)',
                    plainActiveBg: 'var(--joy-palette-secondary-100)',
                },
                // neutral: {
                //     50: '#fafafa',
                //     100: '#f4f4f5',
                //     200: '#e4e4e7',
                //     300: '#d4d4d8',
                //     400: '#a1a1aa',
                //     500: '#71717a',
                //     600: '#52525b',
                //     700: '#3f3f46',
                //     800: '#27272a',
                //     900: '#18181b',
                // },
                danger: {
                    '50': '#ffdfd4',
                    '100': '#ffbfab',
                    '200': '#ff9e83',
                    '300': '#ff7b5b',
                    '400': '#ff5335',
                    '500': '#FF0505',
                    '600': '#db0000',
                    '700': '#b70000',
                    '800': '#960000',
                    '900': '#760000',
                },
                success: {
                    '50': '#e4fbdc',
                    '100': '#c9f7b9',
                    '200': '#abf296',
                    '300': '#89ed72',
                    '400': '#5fe74a',
                    '500': '#05E105',
                    '600': '#00b400',
                    '700': '#008800',
                    '800': '#005e00',
                    '900': '#003800',
                },
                warning: {
                    '50': '#fff4e4',
                    '100': '#ffeac8',
                    '200': '#ffdfad',
                    '300': '#ffd592',
                    '400': '#ffca77',
                    '500': '#ffc05a',
                    '600': '#ffb63b',
                    '700': '#e99900',
                    '800': '#d38700',
                    '900': '#bd7600',
                },
            },
        },
    },

    components: {
        JoyButton: {
            styleOverrides: {
                root: ({theme, ownerState}) => {
                    const borderRadius = theme.vars.radius.xl;
                    const fontWeight = theme.vars.fontWeight.md;

                    const color = ownerState.variant !== 'solid' ? '' : 'white';

                    const hoverBackgroundColor =
                        theme.vars.palette[ownerState.color!].solidHoverBg;
                    const hoverColor =
                        ownerState.variant === 'solid' ? '' : 'white';

                    return {
                        borderRadius,
                        fontWeight,
                        color,
                        '&:hover': {
                            backgroundColor: hoverBackgroundColor,
                            color: hoverColor,
                        },
                    };
                },
            },
        },
    },
});

export default theme;
