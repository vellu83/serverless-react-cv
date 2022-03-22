import React, { Suspense, useState } from 'react';
import {
  Box,
  Paper,
  useTheme,
  Typography,
  Avatar,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Input,
} from '@mui/material';

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
  const [selectedSections, setSelectedSections] = useState({
    work: true,
    education: true,
    projects: true,
    hobbies: true,
  });
  const [filter, setFilter] = useState('');

  const handleCheckbox = (e) => {
    setSelectedSections({
      ...selectedSections,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFilterInput = (e) => {
    setFilter(e.target.value.toLowerCase())
  };

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

          <Grid
            item
            container
            sm={12}
            md={6}
            direction='row'
            spacing={0}
            paddingLeft={5}
          >
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
          <Grid item xs={12} style={theme.griditem}>
            <FormGroup row sx={{ justifyContent: 'center' }}>
              <FormControlLabel
                labelPlacement='top'
                control={
                  <Checkbox
                    name='work'
                    size='large'
                    checked={selectedSections.work}
                    onChange={handleCheckbox}
                  />
                }
                label={<Typography variant='body2'>Work experience</Typography>}
                color='black'
              />
              <FormControlLabel
                labelPlacement='top'
                control={
                  <Checkbox
                    name='education'
                    size='large'
                    checked={selectedSections.education}
                    onChange={handleCheckbox}
                  />
                }
                label={<Typography variant='body2'>Education</Typography>}
              />
              <FormControlLabel
                labelPlacement='top'
                control={
                  <Checkbox
                    name='projects'
                    size='large'
                    checked={selectedSections.projects}
                    onChange={handleCheckbox}
                  />
                }
                label={<Typography variant='body2'>Projects</Typography>}
              />

              <FormControlLabel
                labelPlacement='top'
                control={
                  <Checkbox
                    name='hobbies'
                    size='large'
                    checked={selectedSections.hobbies}
                    onChange={handleCheckbox}
                  />
                }
                label={<Typography variant='body2'>Hobbies</Typography>}
              />
            </FormGroup>
            <FormGroup row sx={{ justifyContent: 'center' }}>
              <Input value={filter} placeholder='filter' disableUnderline={true} onChange={handleFilterInput}/>
            </FormGroup>

            <Divider sx={{marginBottom:4}}/>
          </Grid>

          {selectedSections.work && (
            <Grid item sm={12} md={6} style={theme.griditem}>
              <Work filter={filter}/>
            </Grid>
          )}

          {selectedSections.education && (
            <Grid item sm={12} md={6} style={theme.griditem}>
              <Education filter={filter}/>
            </Grid>
          )}
          {selectedSections.projects && (
            <Grid item sm={12} md={6} style={theme.griditem}>
              <Projects filter={filter}/>
            </Grid>
          )}
          {selectedSections.hobbies && (
            <Grid item sm={12} md={6} style={theme.griditem}>
              <Hobbies filter={filter}/>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Main;
