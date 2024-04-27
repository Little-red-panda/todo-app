import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

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

export default TaskTitleField;
