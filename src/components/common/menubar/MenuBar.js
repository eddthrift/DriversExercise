import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Stack} from '@mui/material';
import MenuData from '../../../data/menu.json'

import './MenuBar.css';

function MenuBar(){
    return(
        <Box className="menu-container">
            <Stack>
                {MenuData.data.map(function(item) {
                    return(
                        <Link key={item.title} to={item.url} className="menu-link">&bull;&nbsp;&nbsp;&nbsp;{item.title}</Link>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default MenuBar;