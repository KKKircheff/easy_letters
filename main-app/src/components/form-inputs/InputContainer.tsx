import { ReactNode, } from 'react'
import { useTheme, Stack, StackProps } from '@mui/joy';
import { inputsBackgrounColor } from '../../routes/Profile/Profile';

type Props = {
    children: ReactNode;
} & StackProps

const InputContainer = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette;

    return (
        <Stack
            direction='column'
            spacing={.5}
            width='100%'
            mx='auto'
            py={2}
            px={2}
            // maxWidth={{ xs: '400px', md: '100%' }}
            border={`1px solid ${c.neutral[200]}`}
            borderRadius='md'
            boxShadow='sm'
            sx={{
                backgroundColor: inputsBackgrounColor,
                backdropFilter: 'blur(7px)'!,
            }}
            {...otherProps}
        >
            {children}
        </ Stack >

    )
}

export default InputContainer