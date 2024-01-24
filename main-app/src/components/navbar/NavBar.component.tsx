import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';

import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import theme from '../../styles/theme';

const NavBar = () => {
    const navigate = useNavigate();
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
        <Box component="nav"
            aria-label="My site"
            sx={(theme) => ({
                position: 'fixed',
                width: '80vw',
                top: '40px',
                left: '10vw',
                zIndex: '1999',
                boxShadow: theme.shadow.md,
                py: 1,
                px: 3,
                borderRadius: 50,
                bgcolor: '#ffffffb0',
                flexGrow: 1,
                backdropFilter: 'blur(5px)',
            })
            }>
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
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {items.map((item) => {
                        return (
                            <ListItem key={item.name} role="none">
                                <Sheet
                                    role="menuitem"
                                    sx={{
                                        cursor: 'pointer',
                                        fontWeight: 'lg',
                                        borderColor: 'transparent',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            transition: 'all .15s ease-in',
                                            borderBottom: '2px solid',
                                            borderColor: theme.vars.palette.primary[500],
                                            marginTop: '1px'
                                        },
                                    }}
                                    onClick={() => navigate(item.path)}>
                                    {item.name}
                                </Sheet>
                            </ListItem>
                        )
                    })
                    }
                </List>
                <Sheet
                    role="none"
                    sx={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.5rem'
                    }}>
                    <Button sx={{ bgcolor: 'neutral.800', borderRadius: '25px', px: 8, py: 1.2, fontWeight: 400 }} onClick={() => navigate('/ai-creator')}>AI Creator</Button>
                    <IconButton onClick={() => navigate('/profile')}
                        sx={{
                            fontSize: '1rem',
                            p: .9,
                            my: 0,
                            bgcolor: 'neutral.800',
                            borderRadius: '25px',
                        }}>
                        <PermIdentityOutlinedIcon fontSize='large' sx={{ color: 'white', fontWeight: 300 }} />
                    </IconButton>
                </Sheet>
            </Stack>
        </Box>
    )
}

export default NavBar