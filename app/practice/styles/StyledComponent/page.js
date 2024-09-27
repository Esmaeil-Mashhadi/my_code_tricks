'use client'

import { styled } from 'styled-components';
import styles from './style.module.css'
import { useState } from 'react';


const Container = styled.div`
  border: solid;
  width: fit-content;
  margin: auto;
`;

const StyledPage = () => {
 

  return (
    <Container props={'HI'}  className={styles.container}>
      <button> esmaeil </button>
    </Container>
  );
};

export default StyledPage;