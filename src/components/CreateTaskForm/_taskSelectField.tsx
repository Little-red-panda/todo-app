import { FC, ReactElement } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'add items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => {
      console.log(e);
    },
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={item.value + index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskSelectField;
