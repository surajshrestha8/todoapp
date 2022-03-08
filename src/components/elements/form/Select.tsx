import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MSelect,
  SelectChangeEvent,
} from '@mui/material';
import { SelectOption } from '~/interface/common.interface';

interface Props {
  label: string;
  required?: boolean;
  options: Array<SelectOption>;
  onChange: (e: SelectChangeEvent) => unknown;
  value: any;
  name: string;
}

const Select = (props: Props) => {
  console.log(props);
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <MSelect
        name={props.name}
        label={props.label}
        required={props.required}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((option) => (
          <MenuItem key={`${option.value}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MSelect>
    </FormControl>
  );
};

export default Select;
