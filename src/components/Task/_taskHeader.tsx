import { Box, Chip, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import dayjs from 'dayjs';

const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'Default title', date = dayjs() } = props;

  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={`${date.format('LL')}`} />
      </Box>
    </Box>
  );
};

export default TaskHeader;
