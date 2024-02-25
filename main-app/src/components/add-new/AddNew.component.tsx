import { Box, Stack, Typography } from "@mui/joy"

type Props = {
    itemToAdd: string;
    description: string;
}

const AddNew = ({ itemToAdd, description }: Props) => {
    return (
        <Stack
            width='100%'
            direction='column'
            justifyContent='center'
            alignItems='center'
            height='100%'
            borderRadius='md'
            mx='auto'
            py={2}
            px={2}
            maxWidth={{ xs: '400px', md: '100%' }}
            sx={{
                border: '2px dashed',
                borderColor: 'primary.500'
            }}
        >
            <Stack direction='row' alignItems='center' spacing={1}>
                <Typography
                    textColor='primary.500'
                    fontSize='mediumTitle'
                    sx={{ verticalAlign: 'center' }}
                >+</Typography>

                <Typography
                    textColor='primary.500'
                    fontWeight='500'>
                    {`Add new ` + itemToAdd}
                </Typography>
            </Stack>
            <Typography fontSize='xs' textColor='primary.500'>{description}</Typography>
        </Stack >
    )
}

export default AddNew