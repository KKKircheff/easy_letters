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
            maxWidth={{ xs: '400px', md: '100%' }}
            borderRadius='md'
            sx={{
                backgroundColor: `rgba(${c.neutral.lightChannel}/.90)`,
                backdropFilter: 'blur(10px)'!,
            }}
            {...otherProps}
        >
            {children}
        </ Stack >

    )
}

export default InputContainer