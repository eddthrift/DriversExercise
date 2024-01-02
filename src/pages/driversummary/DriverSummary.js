import { Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import DriverDetails from '../../components/driversummary/driverdetails/DriverDetails';
import DriverData from '../../data/drivers.json'
import DriverActivityHeaders from '../../components/driversummary/driveractivitybar/DriverActivityHeaders';
import { FilterDriverData } from '../../utils/DriverUtils';

import './DriverSummary.css'

function DriverSummary(){
    var [searchString, setSearchString] = useState();
    var [driverData, setDriverData] = useState(DriverData.data);

    useEffect(() => {
        if(searchString){
            setDriverData(FilterDriverData(DriverData.data, searchString));
        }
        else{
            setDriverData(DriverData.data);
        }
        
    },[searchString]);

    return(
        <div>
            <Grid container className='summary-container' >
                <Grid item xs={12} className='summary-header'>
                    <DriverActivityHeaders setSearchString={setSearchString}/>
                </Grid>
                {driverData.map(function(driver) {
                    return(
                        <Grid item xs={12} key={driver.driverID} className='summary-item'>
                            <DriverDetails driver={driver}></DriverDetails>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default DriverSummary;