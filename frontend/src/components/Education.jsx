import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Typography variant='h2'>Koulutus</Typography>
      <List sx={{ width: '100%' }}>
        <ListItem alignItems='flex-start'>
          <ListItemIcon>
            <SchoolIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='h3'>Koulu 1</Typography>}
            secondary={
              <React.Fragment>
                <Typography variant='body2'>Tehtävänimike</Typography>
                {' - tarkennus'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
