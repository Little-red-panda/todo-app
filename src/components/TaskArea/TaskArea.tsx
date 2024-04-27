import { FC, ReactElement } from 'react';
import { Alert, Box, Grid, LinearProgress, Typography } from '@mui/material';
import dayjs from 'dayjs';
import TaskCounter from '../TaskCounter/TaskCounter';
import Task from '../Task/Task';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../CreateTaskForm/enums/Status';
import { iUpdateTask } from '../CreateTaskForm/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';

const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (data: iUpdateTask) =>
      sendApiRequest('http://localhost:3200/tasks', 'PUT', data),
  });

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }

  function onClickCompleteHandler(
    _e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

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
          <TaskCounter
            count={data ? countTasks(data, Status.todo) : undefined}
            status={Status.todo}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.inProgress) : undefined}
            status={Status.inProgress}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.completed) : undefined}
            status={Status.completed}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} mb={8}>
          {error && (
            <Alert severity="error">
              There was an error fetching your tasks
            </Alert>
          )}

          {!error && Array.isArray(data) && data.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks created yet. Start by creating some
              tasks
            </Alert>
          )}

          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((each, index) => {
              return each.status === Status.todo ||
                each.status === Status.inProgress ? (
                <Task
                  key={index + each.priority}
                  id={each.id}
                  title={each.title}
                  date={dayjs(each.date)}
                  description={each.description}
                  priority={each.priority}
                  status={each.status}
                  onStatusChange={onStatusChangeHandler}
                  onClick={onClickCompleteHandler}
                />
              ) : (
                false
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
