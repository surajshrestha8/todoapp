import { Alert as MuiAlert, AlertColor, AlertProps, Snackbar as DSnackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Props {
  message: string;
  type: AlertColor;
  onClose?: () => unknown;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = ({ message, type, onClose }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(!!message);
  }, [message]);

  return (
    <DSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
      <Alert severity={type} sx={{ width: '100%' }} onClose={onClose}>
        {message}
      </Alert>
    </DSnackbar>
  );
};

export default Snackbar;
