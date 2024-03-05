import { ReactNode, } from 'react'
import { Box, useTheme, BoxProps } from '@mui/joy';

type Props = {
    children: ReactNode;
} & BoxProps

const InputContainer = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette
    return (
        <Box
            width='100%'
            mx='auto'
            py={2}
            px={2}
            maxWidth={{ xs: '400px', md: '100%' }}
            borderRadius='md'
            border={`2px solid ${c.neutral[300]}`}
            {...otherProps}
        >
            {children}
        </Box >

    )
}

export default InputContainer