import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  // const [checked, setChecked] = useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={onStatusChange} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#FFFFFF' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default TaskFooter;
