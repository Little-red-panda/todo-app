import { Avatar, Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'Daria' } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          bgcolor: 'primary.main',
          width: '80px',
          height: '80px',
          mb: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>

      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

export default Profile;
