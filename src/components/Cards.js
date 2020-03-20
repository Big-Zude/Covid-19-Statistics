import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  Button } from '@material-ui/core';





const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: 'white',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
    backgroundColor: '#01579b'
  },
  icon: {
    marginRight: theme.spacing(2),
  },

  card: {
    maxHeight: '100%',
    display: 'block',
    flexDirection: 'column',
    minWidth: '270px',
    marginLeft: '13.5px',
    marginRight: '13.5px',
    float: 'right',
    width: '100px',
    paddingTop: '2%',
    position: 'center',
    borderRadius: '10px',
    justifyContent: 'space-between',
    boxSizing: 'border-box'

  },
  cardMedia: {
    paddingTop: '6.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

}));


export default function Cards() {
  const classes = useStyles();
  const [stats, handleStats] = useState([]);


  console.log("TC", stats)
  useEffect(() => {
    console.log('from use effect')
    getCompanies()

  }, [])

  const getCompanies = async () => {
    const data = await fetch('https://corona.lmao.ninja/all');
    const stats = await data.json();
    handleStats(stats)
    console.log("Server res", stats)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
       
        <Container className={classes.cardGrid} maxWidth="600px">
          <br /><br /><br /><br />
          <Grid container spacing={0} justify="space-between">
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                  <CardMedia className={classes.media}>
                    {/* <CardMedia className={classes.cardMedia} align="center" /> */}
                      {/* <LocationCityIcon color="primary" style={{ fontSize: 70 }} /> */}
                      <Typography>
                        Total Cases
                        </Typography>
                      <Typography color="primary" style={{ fontSize: 40 }}>
                      {stats.cases}
                      </Typography>
                   </CardMedia>
                  </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center" >
                      {/* <MoneyIcon color="primary" style={{ fontSize: 70 }} /> */}
                      <Typography>
                        Total Deaths
                      </Typography>
                      <Typography color="primary" style={{ fontSize: 40 }}>
                      {stats.deaths}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center" >
                      {/* <MonetizationOnIcon color="primary" style={{ fontSize: 70 }} /> */}
                      <Typography>
                        Total Recovered
                      </Typography>
                      <Typography color="primary" style={{ fontSize: 40 }}>
                      {stats.recovered}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}







