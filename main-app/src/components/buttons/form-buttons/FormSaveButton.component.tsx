import React, { ReactNode } from 'react'
import { Button, useTheme, ButtonProps } from '@mui/joy'
import CheckIcon from '@mui/icons-material/Check';


type Props = {
    children: ReactNode
} & ButtonProps
const FormSaveButton = ({ children, ...otherProps }: Props) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize
    return (
        <Button
            sx={{
                justifyContent: 'flex-start',
                paddingLeft: 1,
                paddingY: .2,
                paddingRight: { xs: 2, sm: 2.5 },
                bgcolor: c.neutral[50],
                color: c.primary[500],
                border: `2px solid ${c.primary[400]}`,
                '&:hover': {
                    color: c.neutral[50],
                    bgcolor: c.primary[500],
                }

            }}
            startDecorator={<CheckIcon sx={{
                p: .2,
                border: `2px solid ${c.primary[300]}`,
                bgcolor: c.primary[500],
                color: c.neutral[50]!,
                fontSize: f.mediumTitle,
                fontWeight: 800,
                borderRadius: 'lg',
            }} />}
            {...otherProps}
        >{children}</Button>
    )
}

export default FormSaveButton