import BackspaceIcon from '@mui/icons-material/Backspace';
import { Button } from '@mui/joy';
import { useState } from 'react';
import ConfirmDeleteModal from '../../confirm-delete-modal/ConfirmDeleteModal.compoent';

type Props = {
    onClick: () => void
}

const RemoveButton = ({ onClick }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Button
                type='button'
                onClick={() => setIsOpen(true)}
                size='sm' variant='plain' color='danger'
                sx={{
                    width: 20, alignSelf: 'flex-end'!,
                    '&:hover': {
                        bgcolor: 'transparent'
                    }
                }}>
                < BackspaceIcon sx={{ color: 'danger.500', fontSize: 'md', cursor: 'pointer' }} />
            </Button >
            <ConfirmDeleteModal isOpen={isOpen} setIsOpen={setIsOpen} onClick={onClick} />
        </>
    )
}

export default RemoveButton