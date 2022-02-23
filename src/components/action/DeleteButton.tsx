import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import Spinner from '~/components/elements/loader/Spinner';

interface Props {
  loading?: boolean;
  onConfirm?: () => unknown;
}

const DeleteButton = ({ loading, onConfirm }: Props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClose = () => setOpenDialog(false);

  const handleConfirm = () => {
    setOpenDialog(false);
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="error"
        onClick={() => setOpenDialog(true)}
        disabled={loading}
      >
        {loading && <Spinner show={true} size={20} />}
        {!loading && 'Delete'}
      </Button>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Delete Item?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be reverted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            No, Cancel
          </Button>
          <Button onClick={handleConfirm} variant="outlined" color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteButton;
