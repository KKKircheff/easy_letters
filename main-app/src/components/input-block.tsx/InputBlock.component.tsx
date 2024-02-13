import { Box, FormControl, FormLabel, Stack, Typography, useTheme } from '@mui/joy'
import { ReactNode, useEffect, useRef, useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

type Props = {
    title: string
    children: ReactNode
    value?: string,
    section?: string,
    inputKey?: string | ''
    updateCurrentSection?: (value: string, section: string, inputKey: string,) => void
}


const InputBlock = ({ title, children, value, section, inputKey, updateCurrentSection }: Props) => {

    const c = useTheme().palette


    const [isEditActive, setIsEditActive] = useState(value ? false : true)


    // const ref = useRef(null);
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             setIsEditActive(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);
    //     document.addEventListener("touchstart", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //         document.removeEventListener("touchstart", handleClickOutside);
    //     };
    // }, [ref]);

    const handleBlur = () => {
        value && setIsEditActive(false)
    }

    return (
        <Box
            // ref={ref}
            onBlur={handleBlur}
            maxWidth={{ xs: '400px', md: '100%' }}
            mx='auto'
            bgcolor='neutral.100'
            py={1.5}
            px={2}
            borderRadius='md'
        >
            <Stack direction='row' py={1} justifyContent='space-between'>

                <FormLabel sx={{ mb: 1, fontWeight: 600 }}>{title}</FormLabel>

                {inputKey && <Stack direction='row' spacing={.5} fontSize='xl'>
                    <DriveFileRenameOutlineOutlinedIcon
                        onClick={() => setIsEditActive(!isEditActive)}
                        sx={{ color: isEditActive ? c.primary[500] : c.neutral[500] }}
                        fontSize='inherit' />
                    <DeleteForeverOutlinedIcon
                        onClick={() => isEditActive && updateCurrentSection('', section, inputKey)}
                        sx={{ color: isEditActive ? c.danger[600] : c.neutral[500] }}
                        fontSize='inherit' />
                </Stack>}
            </Stack>

            {
                (isEditActive || !value.length)
                    ?
                    <FormControl>
                        {children}
                    </FormControl>
                    : <Typography
                        fontWeight={500}
                        fontSize='sm'
                        textColor='neutral.600'
                        pl={1.5}
                    >{value}</Typography>
            }
        </Box >
    )
}

export default InputBlock