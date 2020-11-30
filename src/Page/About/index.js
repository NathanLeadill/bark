import { Button, Grid, makeStyles, Typography } from '@material-ui/core';

import React from 'react';


const useStyles = makeStyles((theme) => ({
    background: {
        paddingTop: '150px',
        background: 'white'
    },
    aboutUsHeader: {
        float: 'left',
        color: '#0a0a0a',
        padding: '20px 0',
        // textAlign: 'center',
        // margin: '0 auto',
    },
    aboutUsText: {
        float: 'left',
        textAlign: 'left',
        color: '#b3b3b3'
    },
    aboutUsLogo: {
        background: '#97dae5',
        borderRadius: '50%',
        height: '300px !important',
    },
    aboutContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start'
    },
    learnMoreButton: {
        margin: '40px 0',
        background: '#fd5d05',
        padding: '15px 25px'
    }
}))
    export default function About() {
    const classes = useStyles();
    return (
        <Grid container className={classes.background}>
            <Grid item md={6} xs={12}>
                <img className={classes.aboutUsLogo} src="https://ik.imagekit.io/2hpnhufyfob/dog_SwWUw1s9qem7.png" alt="about us logo"/>
            </Grid>
            <Grid item md={6} className={classes.aboutContainer} xs={12}>
                <Typography variant="h4" className={classes.aboutUsHeader}>About Us</Typography>
                <Typography variant="body2" className={classes.aboutUsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed elementum nulla, ac pretium velit. Suspendisse molestie feugiat nisi luctus varius. Fusce ut magna scelerisque, rhoncus ligula ac, imperdiet mi. Fusce malesuada sem ut euismod euismod. Maecenas sed maximus magna, et convallis nunc. Ut blandit gravida sem eget faucibus. Duis aliquam semper orci, nec viverra dui. Aliquam sed mauris congue, vulputate magna vel, feugiat nisl. In laoreet purus et nulla cursus imperdiet. Sed nec venenatis sapien, non luctus sem. Quisque sed velit lacus.</Typography>
                <Button className={classes.learnMoreButton} style={{ borderRadius: 25 }} variant="contained" color="secondary">Learn More</Button>
            </Grid>
        </Grid>
    );
}