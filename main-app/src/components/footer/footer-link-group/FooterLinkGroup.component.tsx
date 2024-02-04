import { Grid, Stack, Typography } from "@mui/joy"
import { useNavigate } from "react-router-dom"

type Props = {
    groupTitle: string,
    group: {
        title: string,
        link: string,
    }[]
}

const FooterLinkGroup = ({ groupTitle, group }: Props) => {
    const navigate = useNavigate();
    return (
        <Grid xs={12} sm={6} md={3}>
            <Stack direction='column' textAlign='left'>
                <Typography
                    level='body-xs'
                    pb={1}
                    textColor='neutral.500'
                    fontWeight='600'
                    sx={{ cursor: 'default' }}
                >{groupTitle}</Typography>

                {group.map((row, index) => {
                    return <Typography
                        key={index}
                        py={.3}
                        level='body-xs'
                        textColor='neutral.200'
                        fontWeight='500'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate(row.link)}
                    >{row.title}</Typography>
                })}
            </Stack>
        </Grid>
    )
}

export default FooterLinkGroup