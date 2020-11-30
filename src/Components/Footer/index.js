import { makeStyles, Grid, Typography } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import React from 'react';
const useStyles = makeStyles((theme) => ({
    footerContainer: {
        marginTop: '3rem'
    },
    barkLogo: {
        height: '50px',
        float: 'left',
        padding: '10px 0 30px 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0 30px 10px',

        }
    },
    footerOfficeLabel: {
        color: '#c3c3c3',
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'start',
        [theme.breakpoints.down('sm')]: {
            letterSpacing: '2px',
            padding: '0 20px',
            lineHeight: '2rem'
        }
    },
    signupText: {
        color: '#fe5c05',
        textAlign: 'start',
        [theme.breakpoints.down('sm')]: {
            padding: '40px 20px',
        }
    },
    socialIcon: {
        color: '#454545',
        padding: '0 5px 0 0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem',
            padding: '5px'
        }
    },
    socialContainer: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0 auto'
        }
    }
}));

const europeLocations = [
    'London',
    'Paris',
    'Lisbon',
    'Leeds',
    'Prague',
]

const globalLocations = [
    'Sydney',
    'New York',
    'Los Angeles',
    'Manila',
    'Tokyo'
]


export default function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footerContainer}>
            <Grid item xs={12} md={3}>
                <img className={classes.barkLogo} src="https://ik.imagekit.io/2hpnhufyfob/Screenshot_2020-11-30_at_21.46.23_YfoYAh7nyV9Ha.png" alt="bark logo" />
            </Grid>
            <Grid item xs={12} md={3}>
            
                <Grid container>
                    <Grid item xs={6}>
                    {
                        europeLocations.map((location) => <Typography variant="h6" className={classes.footerOfficeLabel}>{location}</Typography>)
                    }
                    </Grid>
                    <Grid item xs={6}>
                    {
                        globalLocations.map((location) => <Typography variant="h6" className={classes.footerOfficeLabel}>{location}</Typography>)
                    }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.signupText}>Click here to sign up →</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className={classes.socialContainer}>
                                <FacebookIcon className={classes.socialIcon}/>
                                <InstagramIcon className={classes.socialIcon}/>
                                <TwitterIcon className={classes.socialIcon}/>
                                <YouTubeIcon className={classes.socialIcon}/>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}