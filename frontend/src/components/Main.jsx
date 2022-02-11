import React, { Suspense } from 'react';
import { Box, Paper, useTheme, Typography, } from '@mui/material';
import Work from './Work';
import Education from './Education'
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
            <Suspense fallback={<div>ladataan...</div>}>
              <Typography sx={{ flexGrow: 1 }} variant='body1'>
                Veli-Matti Remander <br />
              </Typography>
              <VelluEmail />
              <br />
              <VelluPuh />
            </Suspense>
          </Box>
        </Box>
        <Box style={theme.dataSheet}>
          <Box style={theme.leftColumn}>
            <Work/>
          </Box>
          <Box style={theme.rightColumn}>
            <Education />
          </Box>
        </Box>
        
      </Paper>
    </Box>
  );
};

export default Main;


