import bgIconWave from '../../assets/images/bgIconWave.svg'
import { Box, Stack, Typography, useTheme } from '@mui/joy';

type Props = {
    title: string;
    subtitle: string;
}

const ProfileSectionTitle = ({ title, subtitle }: Props) => {
    const c = useTheme().palette;
    return (
        <Stack direction={'column'} py={4} spacing={2} maxWidth={{ xs: '400px', md: '1200px' }} mx='auto'>
            <Stack
                sx={{
                    backgroundImage: `url(${bgIconWave})`,
                    backgroundSize: 'cover',
                    backgroundPositionY: '50%',
                    position: 'relative',
                    width: { xs: '250px', sm: '320px' },
                    height: '105px',
                }}>
                <Box
                    width={{ xs: '90%', sm: 'auto' }}
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
                        level='h1' px={{ xs: 2, sm: 3 }} py={0}
                        fontSize={{ xs: 'medium', sm: 'mediumTitle' }}
                        borderRadius='50px' boxShadow={'md'}
                        noWrap={true}
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                            lineHeight: '3rem',
                            backdropFilter: 'blur(4px) saturate(180%)',
                            '-webkit-backdrop-filter': 'blur(4px) saturate(180%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.30)',
                            color: c.neutral[800],
                        }}
                    >{title}</Typography>

                </Box>
            </Stack>
            <Typography p={2} fontSize='body' fontWeight={'500'} textAlign='left'>{subtitle}</Typography>
        </Stack >
    )
}

export default ProfileSectionTitle