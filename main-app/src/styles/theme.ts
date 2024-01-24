import {extendTheme, PaletteRange} from '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface ColorPalettePropOverrides {
        // apply to all Joy UI components that support `color` prop
        secondary: true;
    }

    interface Palette {
        // this will make the node `secondary` configurable in `extendTheme`
        // and add `secondary` to the theme's palette.
        secondary: PaletteRange;
    }
}

export const theme = extendTheme({
    radius: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
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
                root: ({theme}) => {
                    // perform some logic here
                    const borderRadius = theme.vars.radius.xl;
                    const fontWeight = theme.vars.fontWeight.md;
                    return {
                        borderRadius,
                        fontWeight,
                    };
                },
            },
        },
    },
});

export default theme;