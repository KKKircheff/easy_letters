import { Box, Stack, Typography } from "@mui/joy"
import { ReactNode } from "react"

type Props = {
    paragraph: {
        title: string,
        content: string,
        icon: ReactNode,
    }
}
const GradientIconTextCard = ({ paragraph }: Props) => {
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column' }}
            gap={{ xs: 2, md: 4 }}
            bgcolor='white'
            px={3} py={3}
            borderRadius='md'
            sx={{ color: 'inherit' }}
        > <Stack direction='row' justifyContent='space-between' gap={3} >
                <Typography level='h3' textAlign='left' >
                    {paragraph.title}
                </Typography>
                <Typography fontSize={'largeTitle'} lineHeight='1px' pr={2} pt={0}>
                    {paragraph.icon}
                </Typography>
            </Stack>
            <Typography>
                {paragraph.content}
            </Typography>
        </Box>
    )
}

export default GradientIconTextCard