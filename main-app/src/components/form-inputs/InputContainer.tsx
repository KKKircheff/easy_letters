import { ReactNode, } from 'react'
import { useTheme, Stack, StackProps } from '@mui/joy';

type Props = {
    children: ReactNode;
} & StackProps

const InputContainer = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette
    return (
        <Stack
            direction='column'
            spacing={.5}
            width='100%'
            mx='auto'
            py={2}
            px={2}
            bgcolor='white'
            maxWidth={{ xs: '400px', md: '100%' }}
            borderRadius='md'
            border={`1.2px solid ${c.neutral[200]}`}
            {...otherProps}
        >
            {children}
        </ Stack>

    )
}

export default InputContainer