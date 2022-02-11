import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Work = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Typography variant='h2'>Työkokemus</Typography>
      <List sx={{ width: '100%' }}>
        <ListItem alignItems='flex-start'>
          <ListItemIcon>
            <WorkIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='h3'>Duuni 1</Typography>}
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

export default Work;
