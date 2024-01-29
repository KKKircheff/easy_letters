import { Box, Typography } from "@mui/joy"
import { ReactNode } from "react"

type Props = {
    paragraph: {
        content: string,
        icon: ReactNode,
    }
}
const GradientIconTextCard = ({ paragraph }: Props) => {
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={{ xs: 2, md: 4 }}
            bgcolor='white'
            px={3} py={3}
            borderRadius='md'
            sx={{ color: 'inherit' }}
        >
            <Typography fontSize={'xxLargeTitle'} textAlign='center'>
                {paragraph.icon}
            </Typography>
            <Typography>
                {paragraph.content}
            </Typography>
        </Box>
    )
}

export default GradientIconTextCard