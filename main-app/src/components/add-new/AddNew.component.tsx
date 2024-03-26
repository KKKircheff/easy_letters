import { Stack, Typography, useTheme } from "@mui/joy"
import { inputsBackgrounColor } from "../../routes/Profile/Profile";

type Props = {
    itemToAdd: string;
    description: string;
}

const AddNew = ({ itemToAdd, description }: Props) => {
    const c = useTheme().palette
    return (
        <Stack
            // bgcolor={inputsBackgrounColor}
            bgcolor={`rgba(${c.neutral.darkChannel}/.60)`}
            borderRadius='md'
            px={1.2}
            py={1.2}
        >
            <Stack
                width='100%'
                direction='column'
                justifyContent='center'
                alignItems='center'
                height='100%'
                borderRadius='sm'
                mx='auto'
                py={2}
                px={2}
                // maxWidth={{ xs: '400px', md: '100%' }}
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
                <Typography fontSize='sm' textColor='primary.500'>{description}</Typography>
            </Stack >
        </Stack>
    )
}

export default AddNew