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
import { Control } from 'react-hook-form';
import { UserProfile } from '../../data/userProfileTypes';
import { scrollToTop } from '../../layout/ScrollToTop.component';


type Section = {
    component: React.ComponentType<{ control: Control<UserProfile> }>; // Corrected component type
    menuKey: string;
}

type Props = {
    wideWidth: number,
    compactWidth: number,
    isSidebarWide: boolean
    setIsSidebarWide: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>
    sections: Section[]
}

type SidebarItems = {
    icon: JSX.Element,
    itemName: string,
    sectionName: SectionsToRender
}[]

const ProfileSidebar = ({ wideWidth, compactWidth, isSidebarWide, setIsSidebarWide, setCurrentSectionIndex, sections }: Props) => {
    const c = useTheme().palette;

    const iconColor = c.warning[400]

    const sidebarItems: SidebarItems = [
        {
            icon: <PermIdentityOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'General',
            sectionName: 'general'
        },
        {
            icon: <RecordVoiceOverOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Languages',
            sectionName: 'languages'
        },
        {
            icon: <SchoolOutlinedIcon sx={{ color: iconColor }} />,
            itemName: 'Education',
            sectionName: 'education'
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

    const renderSection = (sectionName) => {
        const index = sections.findIndex(section => section.menuKey === sectionName);
        scrollToTop();
        setCurrentSectionIndex(index)
    }

    return (

        <Stack
            role='sidebar'
            position={{ xs: 'fixed', sm: 'sticky' }}
            top={0} left={0} pl={1.1}
            pt={{ xs: 10, md: 13, lg: 16 }}
            direction='column'
            alignItems='flex-start'
            height={{ xs: '100vh', sm: '95vh' }}
            width={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
            minWidth={isSidebarWide ? `${wideWidth}px` : `${compactWidth}px`}
            maxHeight={{ xs: '100vh', sm: '95vh' }}
            bgcolor={c.neutral[700]}
            zIndex={1}
            overflow='hidden'
            sx={{
                transition: 'all .2s ease-in'
            }}>

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
                            onClick={() => renderSection(item.sectionName)}>
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