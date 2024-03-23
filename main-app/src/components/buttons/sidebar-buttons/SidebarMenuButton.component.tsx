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
                paddingLeft: 1.2,
                paddingRight: isSidebarWide ? 2 : .4,
                fontSize: isSidebarWide ? 'sm' : '0px',
                justifyContent: 'flex-start',
                color: c.neutral[100],
                transition: 'all .2s ease-in',
                bgcolor: `rgba(${c.neutral.darkChannel} / 0.80)`,
            }}
            {...otherProps}
        >{children}</Button>
    )
}

export default SidebarMenuButton