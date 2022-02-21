import { Alert as MuiAlert, AlertColor, AlertProps, Snackbar as DSnackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Props {
  message: string;
  type: AlertColor;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = ({ message, type }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(!!message);
  }, [message]);

  return (
    <DSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Alert severity={type} sx={{ width: '100%' }} onClose={() => setOpen(false)}>
        {message}
      </Alert>
    </DSnackbar>
  );
};

export default Snackbar;
