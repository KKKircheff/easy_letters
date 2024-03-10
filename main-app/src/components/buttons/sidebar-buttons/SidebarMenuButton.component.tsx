import React, { ReactNode } from 'react'
import { Button, useTheme, ButtonProps } from '@mui/joy'



type Props = {
    children: ReactNode;
    isSidebarWide: boolean;
} & ButtonProps

const SidebarMenuButton = ({ children, isSidebarWide, ...otherProps }: Props) => {
    const c = useTheme().palette;
    const f = useTheme().fontSize
    return (
        <Button
            sx={{
                whiteSpace: 'nowrap',
                width: isSidebarWide ? 'auto' : '100%',
                paddingLeft: 1.8,
                paddingRight: isSidebarWide ? 2 : .7,
                fontSize: isSidebarWide ? 'sm' : '0px',
                justifyContent: 'flex-start',
                color: c.neutral[100],
                transition: 'all .2s ease-in',
                bgcolor: 'neutral.800',
            }}
            {...otherProps}
        >{children}</Button>
    )
}

export default SidebarMenuButton