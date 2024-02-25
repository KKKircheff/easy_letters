import { Box, FormControl, FormLabel, Stack, Typography, useTheme } from '@mui/joy'
import { ReactNode, useEffect, useRef, useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { UserProfile, SectionKeys, ArraySectionsValues } from '../../data/userProfileTypes';



type Props = {
    index: number,
    title: string
    children: ReactNode
    section: SectionKeys
    value: ArraySectionsValues | '',
    inputKey?: string | ''
    deleteArraySectionElement: (section: SectionKeys, deleteIndex: number) => void
}


const InputArrayBlock = ({
    index,
    title,
    section,
    value,
    deleteArraySectionElement,
    children
}: Props) => {

    const c = useTheme().palette

    const isEmptyValue = Object.entries(value).some(([key, value]) => !value);
    const [isEditActive, setIsEditActive] = useState(isEmptyValue ? true : false)

    const keysToRender = Object.keys(value).filter(key => key !== 'id');

    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         if (event.key === 'Enter') {
    //             setIsEditActive(false);
    //         }
    //     };

    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);

    const handleBlur = () => {
        value && setIsEditActive(false)
    }

    return (
        <Box
            onBlur={handleBlur}
            width='100%'
            mx='auto'
            py={2}
            px={2}
            maxWidth={{ xs: '400px', md: '100%' }}
            borderRadius='md'
            border={`2px solid ${c.neutral[300]}`}
        >
            <Stack direction='row' py={1} justifyContent='space-between'>

                <FormLabel sx={{ mb: 1, fontWeight: 600, }}>{title}</FormLabel>

                {value && <Stack direction='row' spacing={.5} fontSize='xl'>
                    <DriveFileRenameOutlineOutlinedIcon
                        onClick={() => setIsEditActive(!isEditActive)}
                        sx={{ color: isEditActive ? c.primary[500] : c.neutral[500] }}
                        fontSize='inherit' />
                    <DeleteForeverOutlinedIcon
                        onClick={() => deleteArraySectionElement(section, index)}
                        sx={{ color: isEditActive ? c.danger[600] : c.neutral[500] }}
                        fontSize='inherit' />
                </Stack>}
            </Stack>

            {
                (isEditActive || !value)
                    ?
                    <Stack spacing={2}>
                        {children}
                    </Stack>
                    : <Stack>
                        {keysToRender.map(currentKey => (
                            <Typography
                                key={currentKey}
                                fontWeight={500}
                                fontSize='md'
                                textColor='neutral.600'
                                pl={1.5}
                            >{value[currentKey]}</Typography>
                        ))}
                    </Stack>
            }
        </Box >
    )
}

export default InputArrayBlock