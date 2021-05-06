import { Grid } from '@material-ui/core';
import React from 'react'
import { SidebarStyles } from './Sidebarstyles'

function Sidebar(props) {
    const classes = SidebarStyles(props);
    return (
        <Grid>
            <Grid xs={12} sm={6} md={10} lg={10} xl={10} className={classes.root}>
                hello
            </Grid>
        </Grid>
    )
}

export default Sidebar
