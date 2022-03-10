import React, { Suspense } from 'react';
import { Box, Paper, useTheme, Typography, Avatar, Grid } from '@mui/material';

import Work from './Work';
import Education from './Education';
import Projects from './Projects';
import Hobbies from './Hobbies';
import avatar from '../static/avatar.jpg';
const VelluEmail = React.lazy(() => import('./Email'));
const VelluPuh = React.lazy(() => import('./Puh'));
const Github = React.lazy(() => import('./Github'));

const Main = () => {
  const theme = useTheme();


  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper style={theme.maincontainer}>
        <Grid
          container
         
          alignItems='center'
          justifyContent='center'
          paddingLeft={{ sm: 0, md: 10 }}
          paddingRight={{ sm: 0, md: 10 }}
          paddingTop={4}
          paddingBottom={4}
          style={theme.header}
        >
          <Grid item sm={12} md={6} paddingLeft={5}>
            <Typography variant='h1'>CV</Typography>
          </Grid>

          <Grid item container sm={12} md={6} direction='row' spacing={0} paddingLeft={5}>
            <Grid item>
              <Avatar
                md={3}
                alt='Veli-Matti Remander'
                src={avatar}
                sx={{ width: 85, height: 85 }}
              />
            </Grid>

            <Grid container direction='column'>
              <Suspense fallback={<div>ladataan...</div>}>
                <Typography sx={{ flexGrow: 1 }} variant='h5'>
                  Veli-Matti Remander
                </Typography>
                <VelluEmail />
                <VelluPuh />
                <Github />
                <Typography sx={{ flexGrow: 1 }} variant='h5'>
                  Vantaa / Finland
                </Typography>
              </Suspense>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent='center'
          paddingLeft={{ xs: 1, sm: 4, md: 10 }}
          paddingRight={{ xs: 0, sm: 4, md: 10 }}
          paddingTop={3}
          
        >
          <Grid item sm={12} md={6} style={theme.griditem}>
            <Work />
          </Grid>

          <Grid item sm={12} md={6} style={theme.griditem}>
            <Education />
          </Grid>

          <Grid item sm={12} md={6} style={theme.griditem}>
            <Projects />
          </Grid>
          <Grid item sm={12} md={6} style={theme.griditem}>
            <Hobbies />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Main;
