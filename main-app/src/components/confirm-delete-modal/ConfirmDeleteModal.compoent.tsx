import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClick: () => void;
}

const ConfirmDeleteModal = ({ isOpen, setIsOpen, onClick }: Props) => {

    const handleClick = () => {
        console.log('clicked');
        setIsOpen(false)
    }
    return (
        <React.Fragment>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRoundedIcon />
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete current field?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" type='button' onClick={onClick}>
                            Delete
                        </Button>
                        <Button variant="plain" color="neutral" type='button' onClick={handleClick}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}

export default ConfirmDeleteModal