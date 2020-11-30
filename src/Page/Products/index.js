import { Button, Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Typography} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import React, { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    pawLogo: {
        padding: '5px 5px 5px 25px',
    },
    productsComponent: {
        paddingTop: '50px',
        background: 'white'
    },
    bestSellers: {
        color: 'black'
    },
    media: {
        height: '200px',
      },
    cardContainer: {
        background: '#e9f5fc',
    },
    productContainer: {
        width: '75%',
        margin: ' 0 auto',
        boxShadow: 'none'
    },
    productsShowcase: {
        margin: '0 auto',
    },
    productsHeader: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    productPrice: {
        color: '#fe5c05',
        fontWeight: 900,
        fontFamily: 'system-ui'
    }
}));
const products = [
    {
        id: 1,
        name: "Natures Menu Dog Food Can With Chicken",
        img: 'https://ik.imagekit.io/2hpnhufyfob/product1_x0gtw8GH1YaM.png',
        price:  22.81
    },
    {
        id: 2,
        name: "Natures Menu Senior Dog Food Pouch With Chicken",
        img: 'https://ik.imagekit.io/2hpnhufyfob/product2_fdj9nSL_Tgzq.png',
        price: 11.91,
    },
    {
        id: 3,
        name: "Real Meaty Dog Treats With Beef",
        img: 'https://ik.imagekit.io/2hpnhufyfob/product3_ogKDta5_HTOj.png',
        price: 2.09
    }
]

export default function Products() {
    const classes = useStyles();
    const [hoverProduct, setHoverProduct] = useState(0)
    const onHoverProduct = (e, productId) => {
        console.log(e);
        setHoverProduct(productId)
    }

    return (
        <>
        <Grid container className={classes.productsComponent}>
            <Grid container direction="row" alignItems="center" className={classes.productsHeader}>
                <Grid item>
                    <PetsIcon color="secondary"/>
                </Grid>
                <Grid item>
                    <Typography className={classes.bestSellers} variant="h5">Our Best Sellers</Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.productsShowcase}>
                {
                    //             <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                    products.map((product) => {
                    
                        return (
                            <Grid item xs={12} md={4}>
                                <Card className={classes.productContainer} onMouseEnter={(e) => {onHoverProduct(e, product.id)}}>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.img}
                                        title="test"
                                    />
                                    <CardHeader className={classes.cardContainer} />
                                    <CardContent  className={classes.cardContainer}>
                                        <Typography variant="body1">{product.name}</Typography>
                                        <Typography variant="caption" className={classes.productPrice}>£{product.price}</Typography>
                                        <Grid item xs={12}>
                                        {
                                            (hoverProduct === product.id) ? 
                                            <Button color="secondary" variant="contained" style={{ borderRadius: 25, marginTop: 10 }}  >View More</Button>
                                            : 
                                            <div></div>
                                        }
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
        </>
    )
}