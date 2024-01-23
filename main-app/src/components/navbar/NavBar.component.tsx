import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Person from '@mui/icons-material/Person';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {
    const navigate = useNavigate();

    const items = [
        {
            name: 'Home',
            path: '/',
            icon: ''
        },
        {
            name: 'AI Creator',
            path: '/ai-creator',
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
                padding: 1,
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

                <ListItem role="none" >
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#horizontal-list"
                        aria-label="Profile"
                    >
                        <Person />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default NavBar