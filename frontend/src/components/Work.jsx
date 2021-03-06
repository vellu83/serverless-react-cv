import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Loading from './Loading';
import ErrorConnecting from './ErrorConnecting';

const Work = ({ filter }) => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    setJobs('loading');
    const getJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`, {
          method: 'GET',
        });
        const data = await response.json();
        const sortedJobs = data.sort((a, b) => b.order - a.order);
        setJobs(sortedJobs);
      } catch (error) {
        console.error(error);
        setJobs('error');
      }
    };
    getJobs();
  }, []);

  if (!jobs) {
    return <></>;
  }

  let filteredJobs = jobs;

  if (jobs !== 'loading' && String(filter).length > 1) {
    filteredJobs = jobs.filter(
      (job) =>
        job.employer.toLowerCase().includes(filter) ||
        job.title.toLowerCase().includes(filter) ||
        job.tasks.toLowerCase().includes(filter)
    );
  }


  return (
    <>
      <Typography variant='h2'>Work experience</Typography>
      {filter !== '' && (
        <Typography variant='body2'>(filtered with: {filter})</Typography>
      )}
      {jobs === 'loading' && <Loading />}
      {jobs === 'error' && <ErrorConnecting />}

      {jobs !== 'loading' && jobs !== 'error' && (
        <List sx={{ width: '100%' }}>
          {filteredJobs.map((job) => {
            return (
              <ListItem alignItems='flex-start' key={job.employer}>
                <ListItemIcon>
                  <WorkIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <Typography variant='h4'>{job.dates}</Typography>
                      <Typography variant='h3'>{job.employer}</Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography variant='body2'>{job.title}</Typography>
                      {job.tasks}
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Work;
