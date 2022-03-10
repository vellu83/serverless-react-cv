import React, { useState, useEffect } from 'react';
import {
  Typography,
} from '@mui/material';
import Loading from './Loading';
import ErrorConnecting from './ErrorConnecting';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState(null);

  useEffect(() => {
    setHobbies('loading');
    const getHobbies = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/hobbies`, {
          method: 'GET',
        });
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.order - b.order);
        setHobbies(sortedData);
      } catch (error) {
        console.error(error);
        setHobbies('error');
      }
    };
    getHobbies();
  }, []);

  if (!hobbies) {
    return <></>;
  }


  return (
    <>
      <Typography variant='h2'>Hobbies</Typography>
      {hobbies === 'loading' && <Loading />}
      {hobbies === 'error' && <ErrorConnecting />}

      {hobbies !== 'loading' && hobbies !== 'error' && (
         <Typography variant='body2'>{hobbies.map((hobby, index) => {
           return(
             `${hobby.name}${index < hobbies.length-1 ? ', ':''}`
           )
         })}</Typography>
      )}
    </>
  );
};

export default Hobbies;
