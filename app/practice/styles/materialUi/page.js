"use client"

import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import AvTimerIcon from '@mui/icons-material/AvTimer';

const MaterialPage = () => {
    return (
        <div style={{backgroundColor :"darkgrey"}}>
            <AppBar>
                <Container  maxWidth="xl">
                <Toolbar>
                  <Typography component="h1" variant ="h5" fontWeight="bold" flex={1} >
                    Text
                  </Typography>
                  <AvTimerIcon/>
                  </Toolbar>
              </Container>
            </AppBar>
        </div>
    );
};

export default MaterialPage;

/**
 * In Material-UI, the Toolbar component is designed to act as a container for items within an AppBar and provides some default styling and behavior. By default, the Toolbar component uses flexbox to arrange its child elements horizontally.
 */

/**
 * xs (extra small): No specific pixel value is assigned. It allows the <Container> component to take up the full width of the viewport.

sm (small): The maximum width for this size is 600 pixels.

md (medium): The maximum width for this size is 960 pixels.

lg (large): The maximum width for this size is 1280 pixels.

xl (extra large): The maximum width for this size is 1920 pixels.
 */