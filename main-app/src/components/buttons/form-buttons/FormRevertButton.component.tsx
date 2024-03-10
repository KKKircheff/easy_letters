import React, { ReactNode } from 'react'
import { Button, useTheme, ButtonProps } from '@mui/joy'
import UndoIcon from '@mui/icons-material/Undo';



type Props = {
    children: ReactNode
} & ButtonProps
const FormRevertButton = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize
    return (
        <Button
            sx={{
                justifyContent: 'flex-start',
                border: `2px solid ${c.neutral[300]}`,
                paddingLeft: 1,
                paddingRight: { xs: 2, sm: 2.5 },
                paddingY: .2,
                bgcolor: c.neutral[50],
                color: c.neutral[400],
                '&:hover': {
                    border: `2px solid ${c.warning[400]}`,
                    color: c.neutral[50],
                    bgcolor: c.warning[500],
                }

            }}
            startDecorator={<UndoIcon sx={{
                p: .2,
                border: `2px solid ${c.warning[100]}`,
                bgcolor: c.warning[500],
                color: c.neutral[50],
                fontSize: f.mediumTitle,
                fontWeight: 700,
                borderRadius: 'lg',
            }} />}
            {...otherProps}
        >{children}</Button>
    )
}

export default FormRevertButton