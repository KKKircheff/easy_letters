import React, { ReactNode } from 'react'
import { Button, useTheme, ButtonProps } from '@mui/joy'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

type Props = {
    children?: ReactNode
} & ButtonProps
const NextButton = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize
    return (
        <Button
            sx={{
                borderWidth: '2px',
                borderColor: c.neutral[300],
                color: c.neutral[400],
                paddingRight: 1,
                paddingLeft: children ? 2 : 0,
                paddingY: .3,
            }}
            endDecorator={<KeyboardDoubleArrowRightIcon sx={{
                marginLeft: children ? 0 : -.5,
                color: c.neutral[100],
                fontSize: f.mediumTitle,
                bgcolor: c.neutral[400],
                borderColor: c.neutral[200],
                borderRadius: 'lg',
            }} />}
            {...otherProps}
        >{children ?? ''}</Button>
    )
}

export default NextButton