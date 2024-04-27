import { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../CreateTaskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status = Status.todo,
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#FFFFFF' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
