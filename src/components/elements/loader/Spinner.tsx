import CircularProgress from '@mui/material/CircularProgress';

enum SpinnerColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Inherit = 'inherit',
}

interface Props {
  show?: boolean;
  color?: SpinnerColor;
  size?: number | string;
}

const Spinner = ({ show, color, size = 40 }: Props) => {
  if (!show) {
    return null;
  }

  return <CircularProgress color={color || 'inherit'} size={size} />;
};

export default Spinner;
