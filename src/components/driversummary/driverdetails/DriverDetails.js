import { Grid, Stack, Typography } from '@mui/material';
import {GetActivityDuration} from '../../../utils/DriverUtils'
import React, {useState, useEffect} from 'react';
import DriverActivityBar from '../driveractivitybar/DriverActivityBar';

import './DriverDetails.css';

function DriverDetails({driver}){
    let [availableDuration, setAvailableDuration] = useState(0);
    let [driveDuration, setDriveDuration] = useState(0);
    let [workDuration, setWorkDuration] = useState(0);
    let [restDuration, setRestDuration] = useState(0);
    let [totalDuration, setTotalDuration] = useState(0);


    useEffect(() => {
        setAvailableDuration(GetActivityDuration(driver, 'available'));
        setDriveDuration(GetActivityDuration(driver, 'drive'));
        setWorkDuration(GetActivityDuration(driver, 'work'));
        setRestDuration(GetActivityDuration(driver, 'rest'));
        setTotalDuration(GetActivityDuration(driver, 'all'));
    },[driver]);

    return(
        <Grid container spacing={0} alignItems="center" className='driver-details-container'>
            <Grid item xs={3} className='driver-details-item'>
                <Stack direction={'row'} className='driver-details-text'>
                    <Typography>{driver.forename} {driver.surname}</Typography>
                    <Typography>{driver.vehicleRegistration}</Typography>
                </Stack>
            </Grid>

            <Grid item xs={1} className='driver-details-item'>
                <Typography>{availableDuration} min</Typography>
            </Grid>
            <Grid item xs={1} className='driver-details-item'>
                <Typography>{driveDuration} min</Typography>
            </Grid>
            <Grid item xs={1} className='driver-details-item'>
                <Typography>{workDuration} min</Typography>
            </Grid>
            <Grid item xs={1} className='driver-details-item'>
                <Typography>{restDuration} min</Typography>
            </Grid>
            <Grid item xs={1} className='driver-details-item'>
                <Typography>{totalDuration} min</Typography>
            </Grid>
            <Grid item xs={4} 
                className='driver-details-item'
                >
                <DriverActivityBar driver={driver}/>
            </Grid>
        </Grid>
    );
};

export default DriverDetails;