import React from 'react';
import {Grid} from '@mui/material';
import Header from '../components/common/header/Header';
import MenuBar from '../components/common/menubar/MenuBar';

function MainLayout({children}){
    return(
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={4} sm = {3} md={2} lg={2}>
                <MenuBar/>
            </Grid>
            <Grid item xs={8} sm = {9} md={10} lg={10}>
                {children}
            </Grid>
        </Grid>
    );
}

export default MainLayout;