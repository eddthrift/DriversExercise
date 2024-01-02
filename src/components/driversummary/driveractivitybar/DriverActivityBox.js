import { Box } from '@mui/material';
import {IsDriverActive} from '../../../utils/DriverUtils'
import React, {useState, useEffect} from 'react';

import './DriverActivityBar.css';

function DriverActivityBox(props){
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => 
    {
        setIsActive(IsDriverActive(props.driver, props.date));
    },[props.driver, props.date]);

    let className = isActive ? "activity-box-active" : "activity-box-idle";

    return(
        <Box className={className} sx={{border: 1}}/>
    );
};

export default DriverActivityBox;