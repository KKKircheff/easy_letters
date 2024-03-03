import { Autocomplete, useTheme } from '@mui/joy';

const AutocompleteStyled = ({ options, onChange, onInputChange, value, name, inputValue }) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize;

    return (
        <Autocomplete
            options={options}
            name={name}
            value={value}
            onChange={onChange}
            inputValue={inputValue}
            onInputChange={onInputChange}
            slotProps={{
                listbox: {
                    sx: {
                        borderRadius: 'md',
                        scrollbarWidth: 'none',
                        fontWeight: '500',
                        color: c.neutral[300]!,
                        fontSize: f.md!,
                        '&:active': {
                            color: c.neutral[300]!,
                        }
                    },
                },
                input: {
                    sx: {
                        fontFamily: 'Montserrat',
                        fontSize: f.md,
                        fontWeight: '500',
                        color: c.neutral[500]
                    },
                },
                root: {
                    sx: {
                        '--Input-focusedThickness': '0rem',
                        backgroundColor: 'white',
                        fontFamily: 'sans-serif',
                        fontSize: f.md,
                        fontWeight: 500,
                        color: c.neutral[600],
                        outline: `1.5px solid ${c.primary[500]}`,
                        borderRadius: 'lg',
                        boxShadow: 'none',
                        '&:focus-within': {
                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
                            outline: `1.5px solid ${c.primary[500]}`,
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
