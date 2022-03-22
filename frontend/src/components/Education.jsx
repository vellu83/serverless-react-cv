import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Loading from './Loading';
import ErrorConnecting from './ErrorConnecting';

const Education = ({filter}) => {
  const [education, setEducation] = useState(null);

  useEffect(() => {
    setEducation('loading');
    const getEducation = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/education`,
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        const sortedEdu = data.sort((a, b) => b.order - a.order);
        setEducation(sortedEdu);
      } catch (error) {
        console.error(error);
        setEducation('error');
      }
    };
    getEducation();
  }, []);

  if (!education) {
    return <></>;
  }

  let filteredEducation = education;
  console.log(filteredEducation)
  
  if (education !== 'loading' && String(filter).length > 1) {
    filteredEducation = education.filter(
      (edu) =>
        edu.course.toLowerCase().includes(filter) ||
        edu.school.toLowerCase().includes(filter) 
    );
  }

  return (
    <>
      <Typography variant='h2'>Education</Typography>
      {filter !== '' && (
        <Typography variant='body2'>(filtered with: {filter})</Typography>
      )}
      {education === 'loading' && <Loading/>}
      {education === 'error' && <ErrorConnecting/>}

      {education !== 'loading' && education !== 'error' && (
        <List sx={{ width: '100%' }}>
          {filteredEducation.map((edu) => {
            return (
              <ListItem alignItems='flex-start' key={edu.course}>
                <ListItemIcon>
                  <SchoolIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <Typography variant='h4'>{edu.dates}</Typography>
                      <Typography variant='h3'>{edu.school}</Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography variant='body2'>{edu.course}</Typography>
                      {edu.credits && `Credits: ${edu.credits}`}{edu.grade && `, Grade: ${edu.grade}`}
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

export default Education;
