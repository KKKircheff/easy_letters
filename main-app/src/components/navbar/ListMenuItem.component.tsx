
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
    }
}

const ListMenuItem = ({ item }: ItemProps) => {
    const navigate = useNavigate()
    return (
        <ListItem key={item.name} role="none">
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
                }}
                onClick={() => navigate(item.path)}>
                {item.name}
            </Sheet>
        </ListItem>
    )
}

export default ListMenuItem

