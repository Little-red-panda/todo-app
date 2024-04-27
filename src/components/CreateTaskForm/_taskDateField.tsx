import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const { value, disabled = false, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD/MM/YYYY"
        disabled={disabled}
        label="Task Date"
        onChange={onChange}
        value={value}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
