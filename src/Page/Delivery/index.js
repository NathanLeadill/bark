import { Grid, makeStyles, Typography  } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';

import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'url("https://ik.imagekit.io/2hpnhufyfob/pattern-desktop_63h-k-iszTX0.png")',
        [theme.breakpoints.down('md')]: {
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        },
        [theme.breakpoints.down('xs')]: {
            backgroundImage: 'url("https://ik.imagekit.io/2hpnhufyfob/pattern-mobile_GAF_D2mFqX5-H.png")',
            height: '353px',
            margin: '0 auto',
            backgroundSize: 'contain   ',
        },
        height: '550px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
    },
    deliveryContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deliveryTitle: {
        color: '#060606',
        [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
            paddingBottom: '15px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        }
    },
    deliverySubTitle: {
        color: '#9c9c9c',

    }
}))
export default function Delivery() {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center"className={classes.root}>
            <Grid item xs={12}>
                <Grid item className={classes.deliveryContainer} md={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className={classes.deliveryTitle} variant="h3"><PetsIcon /><br />Spend £40 for <br /> Free Delivery*</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.deliverySubTitle} variant="body2">Delivery Conditions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
                
           
        </Grid>
    )
}