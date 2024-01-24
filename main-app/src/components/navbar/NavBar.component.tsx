import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';

import List from '@mui/joy/List';
import Typography from '@mui/joy/Typography';

import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import theme from '../../styles/theme';

import ListMenuItem from './ListMenuItem.styled';
import SideDrawer from './SideDrawer.styled';

const NavBar = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const items = [
        {
            name: 'Home',
            path: '/',
            icon: ''
        },
        {
            name: 'Pricing',
            path: '/pricing',
            icon: ''
        },
        {
            name: 'Contact',
            path: '/contact',
            icon: ''
        },
    ]

    return (
        <>
            <Box component="nav"
                aria-label="My site"
                sx={{
                    position: 'fixed',
                    width: '80vw',
                    top: '40px',
                    left: '10vw',
                    zIndex: '1999',
                    boxShadow: theme.shadow.sm,
                    py: 1,
                    px: 3,
                    flexGrow: 1,
                    borderRadius: theme.radius.xl,
                    bgcolor: '#ffffffa0',
                    backdropFilter: 'blur(5px)',
                }}>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    spacing={2}
                >
                    <Sheet role='button' sx={{ cursor: 'pointer', backgroundColor: 'transparent' }} onClick={() => navigate('/')}>
                        <Typography level="h3" fontWeight={900}>easy letters.</Typography>
                    </Sheet>

                    <List
                        role="menubar"
                        orientation="horizontal"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',

                        }}>
                        {items.map((item) => <ListMenuItem item={item} />)}
                    </List>

                    <Stack
                        role="none"
                        direction='row'
                        alignItems='center'
                        spacing={1}
                        bgcolor='transparent'
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Button sx={{
                            bgcolor: 'neutral.800',
                            borderRadius: '25px',
                            px: 8, py: 1.2,
                            fontWeight: 400
                        }}
                            onClick={() => navigate('/ai-creator')}
                        >AI Creator</Button>
                        <IconButton
                            onClick={() => navigate('/profile')}
                            variant='solid'
                            sx={{
                                bgcolor: 'neutral.800',
                                borderRadius: theme.radius.xl
                            }}
                        >
                            <PermIdentityOutlinedIcon
                                fontSize='large'
                                sx={{
                                    color: 'currentcolor',
                                    fontWeight: 300
                                }} />
                        </IconButton>
                    </Stack>

                    <IconButton
                        variant='plain'
                        color="neutral"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            borderRadius: theme.radius.xl,
                        }}
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        {isDrawerOpen ? <CloseIcon /> : <Menu />}
                    </IconButton>
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