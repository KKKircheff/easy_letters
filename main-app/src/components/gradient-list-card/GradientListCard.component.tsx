import { Box, List, ListItem, Stack, Typography, useTheme } from "@mui/joy"
import { ReactNode } from "react"
import { iconGradientStyles } from "../../styles/iconGradientStyles"

type Props = {
    paragraph: {
        title: string,
        content: string[],
        icon: ReactNode,
        textSize: string,
    }
}
const GradientListCard = ({ paragraph }: Props) => {

    const c = useTheme().palette
    return (
        <Box
            display='flex'
            flexDirection={{ xs: 'column' }}
            gap={{ xs: 1, md: 0 }}
            bgcolor='white'
            px={{ xs: 3, md: 4 }}
            py={3}
            borderRadius='md'
            maxWidth='700px'
            height='100%'
            sx={{ color: 'inherit' }}
        >
            <Stack
                direction='row-reverse'
                justifyContent='space-between'
                gap={{ xs: 1, md: 3 }}
                pb={{ xs: 2, md: 4 }}
                alignItems='center'>
                <Typography
                    level='h2'
                    fontSize='smallTitle'
                    fontWeight='700'
                    textAlign='right'
                    maxWidth='83%'
                    flexGrow='1'>
                    {paragraph.title.toUpperCase()}
                </Typography>

                <Box
                    width='40px' height='40px'
                    minWidth='40px'
                    maxWidth='40px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius={'50%'}
                    sx={{ backgroundImage: `linear-gradient(45deg ,${c.secondary[300]},${c.primary[300]} )` }}
                    flexGrow={1}
                >
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        width='91%'
                        height='91%'
                        bgcolor='white'
                        borderRadius='50%' >
                        <Typography
                            fontSize='largeTitle'
                            lineHeight='1px'
                            textAlign='center'
                            borderRadius={'50%'}
                        >{paragraph.icon}
                        </Typography>
                    </Box>
                </Box>
            </Stack >

            {paragraph.content.map((list, index) => {
                return (
                    <Box key={index}>
                        {index < 1 ?
                            <Typography
                                maxWidth={{ sm: '100%' }}
                                textColor='neutral.500'
                                fontWeight='500'>
                                {list}
                            </Typography>
                            : <List marker='disc' sx={{ py: 0 }}>
                                <ListItem sx={{ color: 'neutral.500' }}>
                                    <Typography level='body-md' textColor='neutral.500'> {list}</Typography>
                                </ListItem>
                            </List>
                        }
                    </Box>
                )
            })

            }

        </Box >
    )
}

export default GradientListCard