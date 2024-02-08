import { CSSProperties } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button } from '@mui/joy';
import { isMobile } from 'react-device-detect'

interface Style extends CSSProperties {
    background: string,
    display: string,
}

type SlickArrowProps = {
    className?: string,
    style?: Style,
    onClick?: () => void
}

const SlickNextArrow = (props: SlickArrowProps) => {
    const { className, style, onClick } = props;

    return (
        <Box
            onClick={onClick}
            display={isMobile ? 'none' : 'flex'}
            justifyContent='center'
            alignItems='center'
            width='50px'
            height='50px'
            borderRadius='50%'
            bgcolor='primary.500'
            zIndex={3}
            sx={{
                position: 'absolute',
                top: { xs: '35%', md: '45%' },
                right: { xs: '5%', md: '31%', lg: '32.5%' },
            }}
        >
            <ChevronRightIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
        </Box>
    );
}
export default SlickNextArrow;