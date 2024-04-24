import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;

  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskTitleField;
