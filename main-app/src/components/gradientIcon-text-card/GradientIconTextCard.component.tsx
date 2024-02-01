import { Box, Stack, Typography } from "@mui/joy"
import { ReactNode } from "react"

type Props = {
    paragraph: {
        title: string,
        content: string,
        icon: ReactNode,
        textSize: string,
    }
}
const GradientIconTextCard = ({ paragraph }: Props) => {
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column' }}
            gap={{ xs: 2, md: 4 }}
            bgcolor='white'
            px={{ xs: 2, md: 4 }}
            py={3}
            borderRadius='md'
            maxWidth='700px'
            height='100%'
            sx={{ color: 'inherit' }}
        >
            <Stack direction='row' justifyContent='space-between' gap={{ xs: 1, md: 3 }} >

                <Typography
                    level='h3'
                    fontSize='title'
                    fontWeight='700'
                    textAlign='left'
                    flexGrow='1'>
                    {paragraph.title}
                </Typography>

                <Typography fontSize={paragraph.textSize} lineHeight='1px' pr={1}>
                    {paragraph.icon}
                </Typography>
            </Stack>

            <Typography maxWidth={{ sm: '100%' }}>
                {paragraph.content}
            </Typography>
        </Box >
    )
}

export default GradientIconTextCard