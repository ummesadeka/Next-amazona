import {
    Grid,
    Link,
    List,
    ListItem,
    Typography,
    Card,
    Button,
  } from '@material-ui/core';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout';
import data from '../../utils/data';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import Image from 'next/image';

export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const { slug } =  router.query;
    const product = data.products.find((a) => a.slug === slug);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <Layout title={product.name} description={product.desciption}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>
                      <Typography>back to product</Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image 
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={640}
                    layout="responsive"></Image>
                </Grid>
            </Grid>
        </Layout>
    )
}
