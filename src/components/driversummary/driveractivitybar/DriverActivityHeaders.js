import React from 'react';
import { Grid, Stack, TextField, Typography } from '@mui/material';

import './DriverActivityBar.css';

function DriverActivityHeaders(props){

        return(
        <Grid container className='activity-header-container'>
            <Grid item xs={3}>
                <TextField
                    label="Driver Search"
                    id="outlined-size-small"
                    size="small"
                    className='activity-header-search'
                    onChange={(e) => props.setSearchString(e.target.value)}
                />
            </Grid>
            <Grid item xs={1}>
                <Typography className='activity-duration-header'>
                   Available
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography className='activity-duration-header'>
                   Drive
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography className='activity-duration-header'>
                   Work
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography className='activity-duration-header'>
                   Rest
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography className='activity-duration-header'>
                   Total
                </Typography>
            </Grid>
            <Grid item xs={4} className='activity-header-item'>
                <Stack direction={"row"} spacing={4}>
                    <Typography className='activity-box-header'>
                        Mon
                    </Typography>
                    <Typography className='activity-box-header'>
                        Tue
                    </Typography>
                    <Typography className='activity-box-header'>
                        Wed
                    </Typography>
                    <Typography className='activity-box-header'>
                        Thu
                    </Typography>
                    <Typography className='activity-box-header'>
                        Fri
                    </Typography>
                    <Typography className='activity-box-header'>
                        Sat
                    </Typography>
                    <Typography className='activity-box-header'>
                        Sun
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        
    );
};

export default DriverActivityHeaders;