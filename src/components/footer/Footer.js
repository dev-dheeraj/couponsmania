import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { FooterStyles } from './FooterStyles'
import Logo from '../../images/logo.png' 
function Footer(props) {
    const classes = FooterStyles(props);
    return (
        <Grid style={{background:"#635b5b"}}>
            <img src={Logo} alt='logo'/>
            <Typography className={classes.title} variant="h6" noWrap>
            oupon
          </Typography>
          <Typography className={classes.title1} variant="h6" noWrap>
            ania
          </Typography>
        </Grid>
    )
}

export default Footer
