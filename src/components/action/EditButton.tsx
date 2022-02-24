import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  to: string;
}

const EditButton = ({ to }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Edit
    </Button>
  );
};

export default EditButton;
