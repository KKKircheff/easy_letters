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
        xl5: string;
        xl6: string;
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
        xl5: '3rem',
        xl6: '3.5rem',
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
                    50: '#e1f4f4',
                    100: '#c3eae9',
                    200: '#a3dfde',
                    300: '#80d4d3',
                    400: '#58c9c9',
                    500: '#04BEBE',
                    600: '#008f8f',
                    700: '#006163',
                    800: '#00373a',
                    900: '#001816',
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
                neutral: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                danger: {
                    50: '#ffe3d8',
                    100: '#ffc8b2',
                    200: '#ffac8d',
                    300: '#ff9069',
                    400: '#fd7245',
                    500: '#F4511F',
                    600: '#c52400',
                    700: '#980000',
                    800: '#6e0000',
                    900: '#4d0000',
                },
                success: {
                    '50': '#f7fee7',
                    '100': '#ecfccb',
                    '200': '#d9f99d',
                    '300': '#bef264',
                    '400': '#a3e635',
                    '500': '#84cc16',
                    '600': '#65a30d',
                    '700': '#4d7c0f',
                    '800': '#3f6212',
                    '900': '#365314',
                    solidHoverBg: 'var(--joy-palette-success-400)',
                },
                warning: {
                    50: '#fff4db',
                    100: '#ffe9b8',
                    200: '#ffde94',
                    300: '#ffd470',
                    400: '#ffc948',
                    500: '#FFBF00',
                    600: '#c08900',
                    700: '#845700',
                    800: '#522900',
                    900: '#360000',
                    solidHoverBg: 'var(--joy-palette-warning-400)',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    50: '#e1f4f4',
                    100: '#c3eae9',
                    200: '#a3dfde',
                    300: '#80d4d3',
                    400: '#58c9c9',
                    500: '#04BEBE',
                    600: '#008f8f',
                    700: '#006163',
                    800: '#00373a',
                    900: '#001816',
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
                neutral: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                danger: {
                    50: '#ffe3d8',
                    100: '#ffc8b2',
                    200: '#ffac8d',
                    300: '#ff9069',
                    400: '#fd7245',
                    500: '#F4511F',
                    600: '#c52400',
                    700: '#980000',
                    800: '#6e0000',
                    900: '#4d0000',
                },
                success: {
                    50: '#e1f0df',
                    100: '#c4e0c0',
                    200: '#a6d1a1',
                    300: '#87c183',
                    400: '#68b266',
                    500: '#44A248',
                    600: '#0f7a23',
                    700: '#005500',
                    800: '#003100',
                    900: '#001900',
                },
                warning: {
                    50: '#fff4db',
                    100: '#ffe9b8',
                    200: '#ffde94',
                    300: '#ffd470',
                    400: '#ffc948',
                    500: '#FFBF00',
                    600: '#c08900',
                    700: '#845700',
                    800: '#522900',
                    900: '#360000',
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
