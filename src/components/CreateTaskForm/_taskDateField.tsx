import { FC, ReactElement } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = dayjs(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disabled={disabled}
        label="Task Date"
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Dayjs),
};

export default TaskDateField;
