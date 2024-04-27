import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';

import { Priority } from '../CreateTaskForm/enums/Priority';

import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
import { Status } from '../CreateTaskForm/enums/Status';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Title',
    description = 'Lorem ipsum dolor sit amet',
    date,
    priority = Priority.normal,
    status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="flex-start"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader date={date} title={title} />
      <TaskDescription description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
        id={id}
        status={status}
      />
    </Box>
  );
};

export default Task;
