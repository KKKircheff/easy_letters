import { useNavigate } from 'react-router-dom';
import {
    List,
    ModalClose,
    Stack,
    Sheet,
    Drawer,
    Typography,
    Button,
    IconButton
} from '@mui/joy';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ListMenuItem from './ListMenuItem.styled';
import theme from '../../styles/theme';

type Item = {
    name: string,
    path: string,
    icon: string
}

type Props = {
    items: Item[],
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideDrawer = ({ items, isDrawerOpen, setIsDrawerOpen }: Props) => {
    const navigate = useNavigate();
    return (
        <Drawer
            size='lg'
            variant="plain"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            slotProps={{
                content: {
                    sx: {
                        bgcolor: 'transparent',
                        p: { md: 3, sm: 0 },
                        boxShadow: 'none',
                    },
                },
            }}>
            <Sheet
                sx={{
                    marginTop: '120px',
                    borderRadius: 'xl',
                    px: 3,
                    py: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    bgcolor: '#ffffffa0',
                    backdropFilter: 'blur(5px)',
                    width: '80%',
                    mx: '10vw'
                }}
            >
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        fontSize="md"
                        fontWeight="900"
                        sx={{ cursor: 'pointer' }}
                    >easy letters.</Typography>
                    <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Stack>

                <List
                    size="lg"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: 'xl',
                        '& > div': { justifyContent: 'center' },
                    }}>
                    {items.map((item) => <ListMenuItem item={item} />)}
                </List>
                <Stack
                    mx='auto'
                    role="none"
                    direction='row'
                    alignItems='center'
                    spacing={1}
                    bgcolor='transparent'>
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
            </Sheet>
        </Drawer>
    )
}

export default SideDrawer