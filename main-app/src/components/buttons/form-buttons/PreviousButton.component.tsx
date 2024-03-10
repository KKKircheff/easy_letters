import React, { ReactNode } from 'react'
import { Button, useTheme, ButtonProps } from '@mui/joy'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

type Props = {
    children?: ReactNode
} & ButtonProps

const PreviousButton = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize
    return (
        <Button
            sx={{
                borderWidth: '2px',
                borderColor: c.neutral[300],
                color: c.neutral[400],
                paddingLeft: 1,
                paddingRight: children ? 2 : 0,
                paddingY: .3,
            }}
            startDecorator={<KeyboardDoubleArrowLeftIcon sx={{
                marginRight: children ? 0 : -.5,
                color: c.neutral[100],
                fontSize: f.mediumTitle,
                bgcolor: c.neutral[400],
                borderRadius: 'lg',
            }} />}
            {...otherProps}
        >{children ?? ''}</Button>
    )
}

export default PreviousButton

// const PreviousButton = ({ children, ...otherProps }: Props) => {
//     const c = useTheme().palette;
//     const f = useTheme().fontSize
//     return (
//         <Button
//             sx={{
//                 borderWidth: '2px',
//                 borderColor: c.neutral[300],
//                 color: c.neutral[400],
//                 paddingLeft: 1,
//                 paddingY: .3,
//             }}
//             startDecorator={<ChevronLeftIcon sx={{
//                 color: c.neutral[100],
//                 fontSize: f.mediumTitle,
//                 bgcolor: c.neutral[400],
//                 borderRadius: 'lg',
//             }} />}
//             {...otherProps}
//         >{children}</Button>
//     )
// }