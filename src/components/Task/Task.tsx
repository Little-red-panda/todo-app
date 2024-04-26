import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Dayjs } from 'dayjs';
import { Priority } from '../CreateTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Title',
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.normal,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
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
      <TaskHeader title={title} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Dayjs),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
