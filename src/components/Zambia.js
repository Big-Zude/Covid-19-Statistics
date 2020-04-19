//importing packages starts here
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//importing packages ends here

//component styling starts here
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
    maxHeight: '70%',
    display: 'block',
    flexDirection: 'column',
    minWidth: '300px',
    marginLeft: '20.5px',
    marginRight: '20.5px',
    float: 'right',
    width: '1200px',
    position: 'center',
    borderRadius: '5px',
    justifyContent: 'space-evenly',
    boxSizing: 'border-box'

  },
  cardMedia: {
    paddingTop: '4.25%', // 16:9
    paddingButtom:'4.25%'
  },
  cardContent: {
    flexGrow: 0,
  },

}));
//component styling ends here

//function starts here
export default function Cards() {
  const classes = useStyles();
  const [stats, handleStats] = useState([]);
  useEffect(() => {
    FetchData()
  }, [])
  
  //data fetching from the api
  const FetchData = async () => {
    const data = await fetch('https://corona.lmao.ninja/v2/countries/Zambia'); //data source
    const stats = await data.json();
    handleStats(stats)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Card starts here */}
        <Container className={classes.cardGrid} maxWidth="600px">
          <br/><br/>
             <Grid container spacing={15} justify="space-evenly">

             <Card className={classes.card} variant="outlined" elevation={3}>
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center" >                    
                      <Typography color="secondary" style={{ fontSize: 25 }}>
                        ZAMBIA
                      </Typography>
                      <Divider/>
                      <Typography color="primary" style={{ fontSize: 20 }}>
                        
                      Total Cases ({stats.cases}), Cases Today ({stats.todayCases}), Total Deaths ({stats.deaths}), Deaths Today ({stats.todayDeaths}), Recovered Patients ({stats.recovered}), Active ({stats.active}), Critical Patients ({stats.critical})
                      
                      </Typography>
                      
                    </CardMedia>
                  </CardContent>
                </Card>

               
          </Grid>
          <br/><br/>
        </Container>
         {/* Card ends here */}
      </main>
    </React.Fragment>
  );
}







