'use client'
import React from 'react';
import styles from './testStyle.module.css'
import { Button, Container, IconButton, TextField} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { LoadingButton } from '@mui/lab';

const Main = () => {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },]
    
    return (
        <Container  maxWidth='xl'>
                <Autocomplete className={styles.inputes}
                 options={top100Films} sx={{width:"300px"}}
                 getOptionDisabled={(option)=>{
                   return  option ===  top100Films[0]
                 }}
                 renderInput={(params)=> <TextField {...params} label="movie" />}
                 />
                <Button sx={{backgroundColor:"primary"}} variant='contained' endIcon={<DoubleArrowIcon/>} >Click</Button>
         </Container>
    );
};

export default Main;