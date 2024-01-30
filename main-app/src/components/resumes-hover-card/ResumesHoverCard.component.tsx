import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';


import resumeImage1 from '../../assets/images/res1.webp'
import resumeImage2 from '../../assets/images/res2.webp'
import resumeImage3 from '../../assets/images/res3.webp'
import { AspectRatio } from '@mui/joy';
import { useTheme } from '@mui/joy';

const ResumeHoverCard = () => {
    const c = useTheme().palette;
    return (
        <Box
            py={7}
            sx={{
                perspective: '1000px',
                transition: 'transform 0.4s',
                '& > div, & > div > div': {
                    transition: 'inherit',
                },
                '&:hover': {
                    '& > div': {
                        transform: 'rotateY(30deg)',
                        '& > div:nth-child(2)': {
                            transform: 'translate3d(-42%, -28px, 40px)',
                        },
                        '& > div:nth-child(3)': {
                            transform: 'translate3d(12%, -15px, 40px)',
                        },
                        '& > div:nth-child(4)': {
                            transform: 'translate3d(62%, 0px, 40px)',
                        },
                    },
                },
            }}
        >
            <Card
                variant="plain"
                sx={{
                    marginX: 'auto',
                    width: '60%',
                    aspectRatio: '1/1.5',
                    backgroundColor: 'transparent',
                    maxWidth: '300px',
                    // borderColor: '#000',
                }}
            >
                <AspectRatio ratio='1000/1200'>
                </AspectRatio>

                <CardCover sx={{
                    aspectRatio: '800/1200',
                    border: ` 1px solid ${c.neutral[200]}`,
                    boxShadow: 'sm',
                    transform: `rotate(-15deg) translate(-45px,-20px)`,
                }}>
                    <img src={resumeImage1} alt="Resume template image" style={{ objectFit: 'fill' }} />
                </CardCover>

                <CardCover sx={{
                    aspectRatio: '800/1200',
                    border: ` 1px solid ${c.neutral[200]}`,
                    boxShadow: 'sm',
                    transform: 'rotate(0deg) translate(0px,-10px)',
                }}>
                    <img src={resumeImage2} alt="Resume template image" style={{ objectFit: 'fill' }} />
                </CardCover>

                <CardCover sx={{
                    aspectRatio: '800/1200',
                    border: ` 1px solid ${c.neutral[200]}`,
                    boxShadow: 'sm',
                    transform: 'rotate(15deg) translate(50px,0px)',
                }}>
                    <img src={resumeImage3} alt="Resume template image" style={{ objectFit: 'fill' }} />
                </CardCover>
            </Card>
        </Box>
    );
}
export default ResumeHoverCard