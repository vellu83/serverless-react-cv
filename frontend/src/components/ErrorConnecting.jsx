import React from 'react'
import {Box } from '@mui/material';

const ErrorConnecting = () => {
    return (
        <Box sx={{ width: '100%' }}>
          Unable to connect to database, try refreshing browser.
        </Box>
      );
}

export default ErrorConnecting;