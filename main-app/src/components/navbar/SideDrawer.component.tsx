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
import { styleVariables } from '../../styles/styleVariables';

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
    const { xs, md, lg } = styleVariables.layoutPadding;

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
                    width: '85%',
                    marginTop: '80px',
                    mx: { xs, md, lg },
                    px: 3,
                    py: 2,
                    gap: 2,
                    borderRadius: 'xl',
                    bgcolor: '#ffffffa0',
                    backdropFilter: 'blur(5px)',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
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
                    {items.map((item) => <ListMenuItem
                        key={item.name}
                        item={item}
                        setIsDrawerOpen={setIsDrawerOpen}
                    />)}
                </List>
                <LogInGroup setIsDrawerOpen={setIsDrawerOpen} />
            </Sheet>
        </Drawer>
    )
}

export default SideDrawer