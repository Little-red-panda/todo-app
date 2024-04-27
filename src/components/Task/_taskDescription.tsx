import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = 'Lorem ipsum dolor sit amet' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;
