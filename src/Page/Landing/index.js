import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    landingPage: {
        background: '#97dae5',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
        }
    },
    dogContainer: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    dogImg: {
        [theme.breakpoints.up('md')]: {
            margin: '0 auto',
            paddingLeft: '25%',
            height: '75%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            paddingLeft: '0',
            height: '25%',
            width: '50%'
        },
    },
    titleMessage: {
        marginRight: '50%',
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            marginTop: '15%',
            marginBottom: '15%',
        },
        [theme.breakpoints.up('up')]: {
            width: '75%',
        }
    },
    tagLine: {
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            right: '20rem',
            top: '10rem'
            // margin: '50px, 50px 0 0 '
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            margin: '0 auto',
            textAlign: 'center',
            padding: '20px 0'
        }
    },
    learnMoreButton: {
        background: '#fd5d05',
        padding: '10px 30px',
        color: 'white',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            right: '25rem',
            top: '15rem'
            // margin: '50px, 50px 0 0 '
        },
    }

}));
export default function Landing() {
    const classes = useStyles();

    const showSignUpModal = (e) => {
        console.log(e);
    }

    return (
        <Grid className={classes.landingPage} container>
            <Grid className={classes.dogContainer} item md={9} sm={12}>
                <img className={classes.dogImg} src="https://ik.imagekit.io/2hpnhufyfob/dog-hero_gZ1CrRHIk8rr.png" alt="cute dog"/>
            </Grid>
            <Grid item md={3}>
                <Box className={classes.titleMessage} sm={12}>
                    <Typography className={classes.tagLine} variant="h4">Pure Nutrition for Dogs</Typography>
                    <Button 
                        style={{ borderRadius: 25 }}
                        variant="contained"
                        className={classes.learnMoreButton}
                        onClick={showSignUpModal}
                    >Sign Up</Button>
                </Box>
            </Grid>
        </Grid>
    )
}