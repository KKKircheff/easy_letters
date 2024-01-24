import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';


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
                padding: .5,
                borderRadius: 50,
                bgcolor: '#ffffff60',
                flexGrow: 1,
                backdropFilter: 'blur(4px)',
            })
            }>
            <List role="menubar" orientation="horizontal" sx={{
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <ListItem role="none">
                    <ListItemButton
                        role="logo"
                        component="div"
                        onClick={() => navigate('/')}>
                        <Typography level="h3" fontWeight={900}>easy letters.</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    {items.map((item) => {
                        return (
                            <ListItem key={item.name} role="none">
                                <ListItemButton role="menuitem" component="div" onClick={() => navigate(item.path)}>
                                    {item.name}
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                    }
                </ListItem>
                <ListItem role="none">
                    <Button sx={{ bgcolor: 'neutral.800', borderRadius: '25px', px: 8, py: 1.2, fontWeight: 400 }} onClick={() => navigate('/ai-creator')}>AI Creator</Button>
                    {/* <ListItemButton
                        role="menuitem"
                        component="div"
                        onClick={() => navigate('/profile')}
                        sx={{
                            fontSize: '1.3rem',
                            px: 1.2,
                            my: 0,
                            bgcolor: 'neutral.800',
                            borderRadius: '25px',
                        }}
                    >
                        <PermIdentityOutlinedIcon fontSize='large' sx={{ color: 'white', fontWeight: 300 }} />
                    </ListItemButton> */}
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
                </ListItem>
            </List>
        </Box>
    )
}

export default NavBar