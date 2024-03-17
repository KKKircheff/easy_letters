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
            < BackspaceIcon sx={{ color: 'danger.500', fontSize: 'md', cursor: 'pointer', alignSelf: 'flex-end'!, }} onClick={() => setIsOpen(true)} />
            <ConfirmDeleteModal isOpen={isOpen} setIsOpen={setIsOpen} onClick={onClick} />
        </>
    )
}

export default RemoveButton