import React from 'react';
import { Stack } from '@mui/material';
import DriverActivityBox from './DriverActivityBox';

import './DriverActivityBar.css';

var dates = [
    "2021-02-01",
    "2021-02-02",
    "2021-02-03",
    "2021-02-04",
    "2021-02-05",
    "2021-02-06",
    "2021-02-07",
];

function DriverActivityBar(props){
    return(
        <Stack direction={"row"} spacing={4} >
            {dates.map(function(date) {
                return(<DriverActivityBox key={date} driver={props.driver} date={date}/>);
            })}
        </Stack>
    );
};

export default DriverActivityBar;

