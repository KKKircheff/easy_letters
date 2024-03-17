import { Autocomplete, AutocompleteProps, useTheme } from '@mui/joy';

const AutocompleteStyled = ({ options, isOutlined = false, readOnly = false, ...otherProps }) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize;

    return (
        <Autocomplete
            options={options}
            {...otherProps}
            slotProps={{
                listbox: {
                    sx: {
                        borderRadius: 'md',
                        scrollbarWidth: 'none',
                        fontWeight: '500',
                        color: c.neutral[300]!,
                        fontSize: f.sm!,
                        paddingX: .5,
                        '&:active': {
                            color: c.neutral[300]!,
                        }
                    },
                },
                input: {
                    sx: {
                        fontFamily: 'Montserrat',
                        fontSize: f.sm,
                        fontWeight: '500',
                        color: c.neutral[500],
                        paddingX: .5,
                        userSelect: 'none',
                    },
                },
                root: {
                    sx: {
                        '--Input-focusedThickness': '0rem',
                        backgroundColor: 'neutral.50',
                        fontFamily: 'sans-serif',
                        fontSize: f.sm,
                        fontWeight: 500,
                        color: c.neutral[600],
                        borderRadius: 'lg',
                        boxShadow: 'none',
                        minHeight: '30px',
                        borderBottom: isOutlined ?
                            `1px solid ${c.primary[500]}`
                            : `0px solid ${c.neutral[200]}`,
                        outline: `1px solid ${c.neutral[200]}`,
                        '&:focus-within': {
                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
                            borderBottom: !readOnly ? `1.5px solid ${c.primary[500]}` : '',
                            outlineOffset: '0px',
                        },
                        '&::before': {
                            display: 'none',
                        },
                    }
                },
            }}
            sx={{
                borderRadius: 'sm',
            }}
        />
    );
}


export default AutocompleteStyled;
