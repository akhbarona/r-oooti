import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Product({product}) {
  const classes = useStyles();

    return (
        <Card className={classes.root}>
          <Link to={"/product/"+ product._id}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
          </Link>
                <CardContent>
                    <div className={classes.cardContent}>
                      <Link to={"/product/"+ product._id}>
                        <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
                      </Link>
                        <Typography gutterBottom variant="h5" component="h2">Rp {product.price}</Typography>
                    </div>
                    <Typography className={classes.textDescription} component="p" variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <Link to={"/product/"+ product._id}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
                </Link>
            </CardActions>
        </Card>
    )
}

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
  paddingTop: '56.25%', // 16:9,

    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '4rem',
    },
    textDescription: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 3,
      wordBreak: "break-all",
      overflow: "hidden",
      fontSize: "1.5rem"
    }
  }));

export default Product