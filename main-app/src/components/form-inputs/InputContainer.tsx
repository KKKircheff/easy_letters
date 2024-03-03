import { ReactNode } from 'react'
import { Box, useTheme } from '@mui/joy';

type Props = {
    children: ReactNode;
}
const InputContainer = ({ children }: Props) => {
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
        >
            {children}
        </Box >

    )
}

export default InputContainer