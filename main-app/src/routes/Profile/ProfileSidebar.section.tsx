import { Button, Stack, useTheme } from '@mui/joy'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

type Props = {
    isSidebarWide: boolean
    setIsSidebarWide: React.Dispatch<React.SetStateAction<boolean>>
}



const ProfileSidebar = ({ isSidebarWide, setIsSidebarWide }: Props) => {

    const c = useTheme().palette;
    const iconColor = c.warning[400]
    const textColor = c.neutral[100]

    const sidebarItems = [
        {
            icon: <PermIdentityOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'General',
            sectionName: 'general'
        },
        {
            icon: <SchoolOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Education',
            sectionName: 'education'
        },
        {
            icon: <WorkHistoryOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Employment History',
            sectionName: 'workHistory'
        },
        {
            icon: <FormatListBulletedOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Skills',
            sectionName: 'skills'
        },
        {
            icon: <FactCheckOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Summary',
            sectionName: 'summary'
        },
        {
            icon: <ArticleOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Templates',
            sectionName: 'templates'
        },
        {
            icon: <FileCopyOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Application Documents',
            sectionName: 'applicationDocs'
        },
        {
            icon: <InsertDriveFileOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Invoices',
            sectionName: 'invoices'
        },

    ]

    return (
        <Stack direction='column' spacing={1} mt={16}>

            {sidebarItems.map((item, index) => {
                return (
                    <Button
                        key={index}
                        color='neutral'
                        variant='solid'
                        endDecorator={item.itemName}
                        sx={{
                            width: isSidebarWide ? 'auto' : '100%',
                            paddingRight: isSidebarWide ? 2 : 0,
                            fontSize: isSidebarWide ? 'sm' : '0px',
                            justifyContent: 'flex-start',
                            color: textColor,
                            transition: 'all .2s ease-in',
                        }}
                    >
                        {item.icon}
                    </Button>)
            })
            }

            <Button
                color='neutral'
                variant='solid'
                endDecorator={'Log Out'}
                sx={{
                    paddingRight: isSidebarWide ? 1 : 0,
                    justifyContent: 'flex-start',
                    color: c.neutral[100],
                    fontSize: isSidebarWide ? 'sm' : '0px',
                    transition: 'all .2s ease-in'
                }}
            >
                <PowerSettingsNewIcon sx={{ color: c.danger[300] }} />
            </Button>

            <Button
                color='neutral'
                variant='solid'
                sx={{
                    justifyContent: 'flex-start',
                    color: c.neutral[100],
                    fontSize: isSidebarWide ? 'sm' : '0px',
                    transition: 'all .2s ease-in'
                }}
                onClick={() => setIsSidebarWide(!isSidebarWide)}
            > <KeyboardDoubleArrowRightOutlinedIcon
                    sx={{
                        color: isSidebarWide ? c.neutral[100] : iconColor,
                        marginLeft: 'auto',
                        transform: isSidebarWide ? 'rotate(-180deg)' : 'rotate(0deg)',
                        transition: 'all .2s ease-in'
                    }} />
            </Button>

        </Stack>
    )
}

export default ProfileSidebar