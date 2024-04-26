import { FC, ReactElement, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useMutation } from '@tanstack/react-query';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../TaskArea/interfaces/ICreateTask';

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) => {
      return sendApiRequest('http://localhost:3200/tasks', 'POST', data);
    },
  });

  function createTaskHandle() {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 6000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', mb: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}

      <Typography variant="h6" component="h2" mb={2}>
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDateField
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isPending}
        />

        <Stack sx={{ width: '100%' }} spacing={2} direction={'row'}>
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
            disabled={createTaskMutation.isPending}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
            disabled={createTaskMutation.isPending}
          />
        </Stack>

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandle}
          disabled={!title || !description || !date || !status || !priority}
        >
          Create a task
        </Button>

        {createTaskMutation.isPending && <LinearProgress />}
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
