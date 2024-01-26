import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';

import List from '@mui/joy/List';
import Typography from '@mui/joy/Typography';

import theme from '../../styles/theme';
import { styleVariables } from '../../styles/styleVariables';

import ListMenuItem from './ListMenuItem.component';
import SideDrawer from './SideDrawer.component';
import LogInGroup from './LogInGroup.component';
import BurgerButton from './BurgerButton.component';

const NavBar = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { xs, md, lg } = styleVariables.layoutPadding;

    const items = [
        {
            name: 'Home',
            path: '/',
            icon: ''
        },
        {
            name: 'AI Writer',
            path: '/ai-writer',
            icon: ''
        },
        {
            name: 'Pricing',
            path: '/pricing',
            icon: ''
        },
        {
            name: 'Resources',
            path: '/resources',
            icon: ''
        },
    ]

    return (
        <>
            <Box component="nav"
                aria-label="My site"
                sx={{
                    position: 'fixed',
                    top: '40px',
                    left: { xs, md, lg },
                    width: { xs: '90vw', md: '85vw', lg: '80vw' },
                    zIndex: '1999',
                    boxShadow: theme.shadow.sm,
                    py: { xs: 1, md: 1 },
                    px: { xs: 3, md: 3 },
                    flexGrow: 1,
                    borderRadius: theme.radius.full,
                    bgcolor: '#ffffffa0',
                    backdropFilter: 'blur(5px)',
                }}>

                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    spacing={2}>

                    <Sheet role='logo' sx={{ cursor: 'pointer', backgroundColor: 'transparent' }} onClick={() => navigate('/')}>
                        <Typography
                            level='h3'
                            fontWeight={900}
                            sx={{
                                fontSize: { xs: 'lg', md: 'xl2' }
                            }}
                        >easy letters.</Typography>
                    </Sheet>

                    <List
                        role="menubar"
                        orientation="horizontal"
                        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {items.map((item) => <ListMenuItem
                            key={item.name}
                            item={item}
                            setIsDrawerOpen={setIsDrawerOpen}
                        />)}
                    </List>

                    <Stack sx={{ display: { xs: 'none', md: 'flex' }, }}>
                        <LogInGroup />
                    </Stack>

                    <Stack role="button" sx={{ display: { xs: 'block', md: 'none' }, }}>
                        <BurgerButton isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                    </Stack>

                </Stack>
            </Box>
            <SideDrawer
                items={items}
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen} />
        </>
    )
}

export default NavBar