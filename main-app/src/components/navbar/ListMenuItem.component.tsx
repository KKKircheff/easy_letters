
import ListItem from "@mui/joy/ListItem"
import Sheet from "@mui/joy/Sheet"
import { useNavigate } from "react-router-dom";
import theme from '../../styles/theme';
import { isMobile } from 'react-device-detect';

type ItemProps = {
    item: {
        name: string,
        path: string,
        icon: string
    },
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const ListMenuItem = ({ item, setIsDrawerOpen }: ItemProps) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(item.path);
        setIsDrawerOpen(false);
    }

    return (
        <ListItem key={item.name} role="none" onClick={handleClick}>
            <Sheet
                role="menuitem"
                sx={{
                    cursor: 'pointer',
                    fontWeight: 'lg',
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    '&:hover': !isMobile ? {
                        transition: 'all .15s ease-in',
                        borderBottom: '2px solid',
                        borderColor: theme.vars.palette.primary[500],
                        marginTop: '1px'
                    } : {},
                }}>
                {item.name}
            </Sheet>
        </ListItem>
    )
}

export default ListMenuItem

