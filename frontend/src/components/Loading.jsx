import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {

    return (
        <Box sx={{ width: '100%' }}>
        Fetching data...
        <br />
        <CircularProgress />
      </Box>
    )
}

export default Loading;
