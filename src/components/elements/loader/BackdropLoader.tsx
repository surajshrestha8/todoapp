import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  open: boolean;
  onClick?: () => unknown;
}

const BackdropLoader = ({ open }: Props) => {
  return (
    <Backdrop open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;
