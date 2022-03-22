import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Link,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Loading from './Loading';
import ErrorConnecting from './ErrorConnecting';

const Projects = ({filter}) => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    setLinks('loading');
    const getJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/links`, {
          method: 'GET',
        });
        const data = await response.json();
        const sortedData = data.sort((a, b) => b.order - a.order);
        setLinks(sortedData);
      } catch (error) {
        console.error(error);
        setLinks('error');
      }
    };
    getJobs();
  }, []);

  if (!links) {
    return <></>;
  }

  let filteredLinks = links;
  

  if (links !== 'loading' && String(filter).length > 1) {
    filteredLinks = links.filter(
      (link) =>
        link.name.toLowerCase().includes(filter) ||
        link.description.toLowerCase().includes(filter) ||
        link.longDesc.toLowerCase().includes(filter)
    );
  }



  return (
    <>
      <Typography variant='h2'>Projects</Typography>
      {filter !== '' && (
        <Typography variant='body2'>(filtered with: {filter})</Typography>
      )}
      {links === 'loading' && <Loading />}
      {links === 'error' && <ErrorConnecting />}

      {links !== 'loading' && links!== 'error' && (
        <List sx={{ width: '100%' }}>
          {filteredLinks.map((link) => {
            return (
              <ListItem alignItems='flex-start' key={link.href}>
                <ListItemIcon>
                  <CodeIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <Link href={link.href} target='_blank' variant='body2'>{link.name}</Link>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography variant='body2'>{link.description}</Typography>
                      {link.longDesc && `Tools and frameworks used:`}
                      <br/>
                      {link.longDesc && link.longDesc}
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

export default Projects;
