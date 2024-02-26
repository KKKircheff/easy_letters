import { Box, FormControl, FormLabel, Stack, Typography, useTheme } from '@mui/joy'
import { ReactNode, useEffect, useRef, useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

type Props = {
    label: string;
    children: ReactNode
}

const FormInputBlock = ({ label, children }: Props) => {

    const c = useTheme().palette

    return (
        <Box

            width='100%'
            mx='auto'
            py={2}
            px={2}
            maxWidth={{ xs: '400px', md: '100%' }}
            borderRadius='md'
            border={`2px solid ${c.neutral[300]}`}
        >
            <Stack direction='row' py={1} justifyContent='space-between'>
                <FormLabel sx={{ mb: 1, fontWeight: 600, }}>{label}</FormLabel>
                {/* {inputKey && <Stack direction='row' spacing={.5} fontSize='xl'>
                    <DriveFileRenameOutlineOutlinedIcon
                        onClick={() => setIsEditActive(!isEditActive)}
                        sx={{ color: isEditActive ? c.primary[500] : c.neutral[500] }}
                        fontSize='inherit' />
                    <DeleteForeverOutlinedIcon
                        onClick={() => isEditActive && updateCurrentSection('', section, inputKey)}
                        sx={{ color: isEditActive ? c.danger[600] : c.neutral[500] }}
                        fontSize='inherit' />
                </Stack>} */}
            </Stack>
            <FormControl>
                {children}
            </FormControl>
            {/* : <Typography
                        fontWeight={500}
                        fontSize='md'
                        textColor='neutral.600'
                        pl={1.5}
                    >{value}</Typography> */}
        </Box >
    )
}

export default FormInputBlock