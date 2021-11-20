import React from 'react'
import Head from 'next/head';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Link,
    createMuiTheme,
    ThemeProvider,
    CssBaseline,
    Switch,
    Badge,
    Button,
    Menu,
    MenuItem,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    Divider,
    ListItemText,
    InputBase,
  } from '@material-ui/core';
  import useStyles from '../utils/styles'

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>amazona</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved NEXT.amazona</Typography>
            </footer>
        </div>
    )
}
