import React, { Suspense } from 'react';
import { Box, Paper, useTheme, Typography, Avatar } from '@mui/material';
import Work from './Work';
import Education from './Education';
import Links from './Links';
import Hobbies from './Hobbies';
import avatar from '../static/avatar.jpg';
const VelluEmail = React.lazy(() => import('./Email'));
const VelluPuh = React.lazy(() => import('./Puh'));

const Main = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper style={theme.maincontainer}>
        <Box style={theme.header}>
          <Box style={theme.headerItem}>
            <Typography variant='h1'>CV</Typography>
          </Box>
          <Box style={theme.headerItem}>
            <Box style={theme.headerAvatar}>
              <Avatar
                alt='Veli-Matti Remander'
                src={avatar}
                sx={{ width: 85, height: 85 }}
              />
            </Box>

            <Box style={theme.headerText}>
              <Suspense fallback={<div>ladataan...</div>}>
                <Typography sx={{ flexGrow: 1 }} variant='h5'>
                  Veli-Matti Remander
                </Typography>
                <VelluEmail />
                <VelluPuh />
                <Typography sx={{ flexGrow: 1 }} variant='h5'>
                  Vantaa / Finland
                </Typography>
              </Suspense>
            </Box>
          </Box>
        </Box>
        <Box style={theme.dataContainer}>
          <Box style={theme.dataColumn}>
            <Box style={theme.section}>
              <Work />
            </Box>
            <Box style={theme.section}>
              <Links />
            </Box>
            <Box style={theme.section}>
              <Hobbies />
            </Box>
          </Box>

          <Box style={theme.dataColumn}>
            <Box style={theme.section}>
              <Education />
            </Box>
            
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Main;
