import { Button, Stack, useTheme } from '@mui/joy'
import { SectionsToRender } from './Profile';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SidebarMenuButton from '../../components/buttons/sidebar-buttons/SidebarMenuButton.component';
import { useUserContext } from '../../context/UserContext';


type Props = {
    isSidebarWide: boolean
    setIsSidebarWide: React.Dispatch<React.SetStateAction<boolean>>
    setSectionToRender: React.Dispatch<React.SetStateAction<SectionsToRender>>
}

type SidebarItems = {
    icon: JSX.Element,
    itemName: string,
    sectionName: SectionsToRender
}[]

const ProfileSidebar = ({ isSidebarWide, setIsSidebarWide, setSectionToRender }: Props) => {
    const c = useTheme().palette;

    const iconColor = c.warning[400]

    const sidebarItems: SidebarItems = [
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
            icon: <RecordVoiceOverOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Languages',
            sectionName: 'languages'
        },
        {
            icon: <WorkHistoryOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Career History',
            sectionName: 'careerHistory'
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

    const { logOut } = useUserContext()

    return (

        <Stack
            direction='column'
            bgcolor='trasparent'
            height={{ xs: '100vh', sm: '95vh' }}
            maxHeight={{ xs: '100vh', sm: '95vh' }}
            overflow='hidden'
            pt={{ xs: 10, md: 13, lg: 16 }}
        >
            <Stack
                direction='column'
                spacing={1}
                bgcolor='transparent'
                sx={{ overflowY: 'scroll', scrollbarWidth: 'none', }}
                pr={2}
            >
                <SidebarMenuButton
                    aria-label='extend sidebar' color='neutral' variant='solid'
                    isSidebarWide={isSidebarWide}
                    onClick={() => setIsSidebarWide(!isSidebarWide)}>
                    <KeyboardDoubleArrowRightOutlinedIcon sx={{
                        color: isSidebarWide ? c.neutral[100] : c.primary[50],
                        marginLeft: 'auto',
                        marginRight: 1,
                        transform: isSidebarWide ? 'rotate(-180deg)' : 'rotate(0deg)',
                        transition: 'all .2s ease-in'
                    }} />
                </SidebarMenuButton>
                {sidebarItems.map((item, index) => {
                    return (
                        <SidebarMenuButton
                            key={index} color='neutral' variant='solid'
                            aria-label={item.itemName}
                            isSidebarWide={isSidebarWide}
                            endDecorator={item.itemName}
                            onClick={() => setSectionToRender(item.sectionName)}>
                            {item.icon}
                        </SidebarMenuButton>)
                })}
                <SidebarMenuButton
                    aria-label='log out' color='neutral' variant='solid'
                    isSidebarWide={isSidebarWide}
                    endDecorator={'Log Out'}
                    onClick={() => logOut}>
                    <PowerSettingsNewIcon sx={{ color: c.warning[400] }} />
                </SidebarMenuButton>
            </Stack>
        </Stack >

    )
}

export default ProfileSidebar