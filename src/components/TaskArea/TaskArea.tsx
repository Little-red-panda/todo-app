import { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import TaskCounter from '../TaskCounter/TaskCounter';
import Task from '../Task/Task';
import { Priority } from '../CreateTaskForm/enums/Priority';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box my={8} px={4}>
        <Typography variant="h6" component="h2">
          Status of your tasks as on {dayjs().format('dddd, MMMM D, YYYY')}
        </Typography>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} mb={8}>
          <Task priority={Priority.high} />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
