import { useState } from 'react';
import ConfirmDeleteModal from '../../confirm-delete-modal/ConfirmDeleteModal.compoent';
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack, Switch, Typography } from '@mui/joy';
import { Control, Controller, Path, useForm, useFormContext, useWatch, } from 'react-hook-form';
import { UserProfile } from '../../../data/userProfileTypes';
import VisibleToggleButton from '../visible-toggle-button/VisibleToggleButton.component';

type Props = {
    name: Path<UserProfile>;
    control: Control<UserProfile>
    index: number;
    remove: (index: number) => void
}

const FieldButtonGroup = ({ control, name, index, remove }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={1}>
                <VisibleToggleButton name={name} control={control} />
                <CancelIcon sx={{ color: 'danger.600', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => setIsOpen(true)} />
            </Stack >
            <ConfirmDeleteModal isOpen={isOpen} setIsOpen={setIsOpen} onClick={() => remove(index)} />
        </>
    )
}

export default FieldButtonGroup