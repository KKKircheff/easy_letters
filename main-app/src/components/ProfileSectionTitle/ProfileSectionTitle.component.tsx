import bgIconWave from '../../assets/images/bgIconWave.webp'
import bgIconDoubleWave from '../../assets/images/bgIconDoubleWave.webp'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/joy';
import { iconGradientStyles } from '../../styles/iconGradientStyles';
import { inputsBackgrounColor } from '../../routes/Profile/Profile';

type Props = {
    title: string;
    subtitle: string;
}

const ProfileSectionTitle = ({ title, subtitle }: Props) => {
    const c = useTheme().palette;
    return (
        <Stack
            direction={'column'}
            py={2}
            px={{ xs: .75, md: 1 }}
            // maxWidth={{ xs: '400px', md: '1200px' }}
            maxWidth='1200px'
            mx='auto' >
            <Stack spacing={2} bgcolor='white' borderRadius='md' p={2.5}
                sx={{
                    bgcolor: inputsBackgrounColor,
                    backdropFilter: 'blur(5px)',
                }}>
                <Stack direction='column' spacing={2} alignItems="flex-start">
                    <Typography
                        level='h2' textAlign='left' fontSize={'lg'}
                        sx={{ ...iconGradientStyles.scondaryPrimary, width: 'fitContent' }}
                    >{title.toUpperCase()}</Typography>
                </Stack>
                <Divider orientation="horizontal" color='neutral' sx={{ width: '98%' }} />
                <Typography fontSize='body' fontWeight={'500'} textAlign='left'>{subtitle}</Typography>
            </Stack>
        </Stack >
    )
}

export default ProfileSectionTitle

{/* <Stack width={{ xs: '96%', sm: '400px' }} position='relative'>
                <img src={bgIconDoubleWave} alt="background section title icon"
                    style={{ opacity: '.8', width: '250px', height: '110px', marginLeft: '70px' }} />
                <Box
                    width={{ xs: '80%', sm: 'auto' }}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        level='h1' px={{ xs: 2, sm: 3 }} py={1}
                        fontSize={{ xs: 'medium', sm: 'mediumTitle' }}
                        borderRadius='md' boxShadow={'md'}
                        noWrap={true}
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                            lineHeight: '3rem',
                            backdropFilter: 'blur(6px) saturate(180%)',
                            '-webkit-backdrop-filter': 'blur(6px) saturate(180%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.30)',
                            color: c.neutral[800],
                        }}
                    >{title}</Typography>

                </Box>
            </Stack> */}