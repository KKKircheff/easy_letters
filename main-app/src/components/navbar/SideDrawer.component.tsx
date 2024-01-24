import {
    List,
    ModalClose,
    Stack,
    Sheet,
    Drawer,
    Typography,
} from '@mui/joy';

import ListMenuItem from './ListMenuItem.component';
import LogInGroup from './LogInGroup.component';

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
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    marginTop: '120px',
                    mx: '10vw',
                    px: 3,
                    py: 2,
                    gap: 2,
                    borderRadius: 'xl',
                    bgcolor: '#ffffffa0',
                    backdropFilter: 'blur(5px)',
                }}>

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
                <LogInGroup />
            </Sheet>
        </Drawer>
    )
}

export default SideDrawer