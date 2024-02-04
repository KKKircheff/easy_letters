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
            px={{ xs: 2, md: 4 }}
            pt={3}
            pb={2}
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
                    maxWidth='80%'
                    flexGrow='1'>
                    {paragraph.title}
                </Typography>

                <Box
                    width='45px' height='45px'
                    minWidth='45px'
                    maxWidth='45px'
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
                        width='92%'
                        height='92%'
                        bgcolor='white'
                        borderRadius='50%' >

                        <Typography
                            fontSize='xLargeTitle'
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
                    <Typography
                        key={index}
                        maxWidth={{ sm: '100%' }}
                        textColor='neutral.500'
                        fontWeight='500'>
                        {index < 1 ?
                            list :
                            <List marker='disc'>
                                <ListItem sx={{ color: 'neutral.500' }}>
                                    <Typography level='body-md' textColor='neutral.500'> {list}</Typography>
                                </ListItem>
                            </List>
                        }
                    </Typography>
                )
            })

            }

        </Box >
    )
}

export default GradientListCard