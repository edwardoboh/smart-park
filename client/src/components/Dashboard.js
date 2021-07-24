import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MSwitch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
// import Badge from '@material-ui/core/Badge';
// import TableChartIcon from '@material-ui/icons/TableChart';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MailIcon from '@material-ui/icons/Mail';

import Park2 from './Park2';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import { parkContext } from '../data/store';
import { getParks } from '../data/actions';
import serverUrl from '../url'

// my Imports
// import Temperature from './weather/Temperature'
// import Humidity from './weather/Humidity'
// import Water from './weather/Water'
// import Light from './weather/Light'
// import { MainListItems} from './listItems';
// import Title from './Title'


// Socket IO Client Import
import io from 'socket.io-client'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 290,
  },
}));

export default function Dashboard() {
  let socket;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // Getting the Data
  const {park, setPark} = useContext(parkContext)
  useEffect(() => {
    getParks({setPark})
  }, [])

  // Socket IO UseEffect
  useEffect(() => {
  socket = io("/")
  console.log("Socket connected in frontend")
  socket.on("readings", payload => {
    console.log("Socket executed in frontend")
    getParks({setPark})
  })
  }, [])

  // Dark Theme
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{ background: '#25408f', marginBottom: '1rem' }}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Badge badgeContent={state.length} color="primary">
            <TableChartIcon />
          </Badge> */}
          <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
            <Button
              size="large"
              onClick={()=> history.push("/")}
            >
              <strong style={{fontSize:"1.2rem"}}>SMART PARK</strong>
            </Button>
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          <MSwitch checked={darkState} onChange={handleThemeChange} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems history={history}/></List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/* <Router> */}
          <Switch>
            <Route exact path={`/`}>
              <Container maxWidth="lg" className={classes.container}>
                {/* <Title>Last Update</Title> */}
                <Grid container spacing={7}>
                  {/* Car Park A*/}
                  <Grid item xs={12} md={6} lg={6}>
                    <CardActionArea>
                    {/* <CardActionArea onClick={() => history.push(`/temperature`)}> */}
                      <Paper className={fixedHeightPaper}>
                        <Park2 park={park} myPark={"parkA"}/>
                        {/* <Park sensor={state.slice(0).reverse()} displayType={{key: "temperature", label: "Temperature"}}/> */}
                      </Paper>
                    </CardActionArea>
                  </Grid>
                  {/* Car Park B*/}  
                  <Grid item xs={12} md={6} lg={6}>
                    <CardActionArea>
                    {/* <CardActionArea onClick={() => history.push(`/humidity`)}> */}
                      <Paper className={fixedHeightPaper}>
                        <Park2 park={park} myPark={"parkB"}/>
                        {/* <Park sensor={state.slice(0).reverse()} displayType={{key: "humidity", label: "Relative Humidity"}}/> */}
                      </Paper>
                    </CardActionArea>
                  </Grid>
                  {/* Car Park C*/}
                  <Grid item xs={12} md={6} lg={6}>
                    <CardActionArea>
                    {/* <CardActionArea onClick={() => history.push(`/water`)}> */}
                      <Paper className={fixedHeightPaper}>
                        <Park2 park={park} myPark={"parkC"}/>
                        {/* <Park sensor={state.slice(0).reverse()} displayType={{key: "water", label: "Water Level"}}/> */}
                      </Paper>
                    </CardActionArea>
                  </Grid>
                  {/* Car Park D*/}
                  <Grid item xs={12} md={6} lg={6}>
                    <CardActionArea>
                    {/* <CardActionArea onClick={() => history.push(`/water`)}> */}
                      <Paper className={fixedHeightPaper}>
                        <Park2 park={park} myPark={"parkD"}/>
                        {/* <Park sensor={state.slice(0).reverse()} displayType={{key: "light", label: "Light Intensity"}}/> */}
                      </Paper>
                    </CardActionArea>
                  </Grid>
                </Grid>
                <Box pt={4}>
                </Box>
              </Container>
            </Route>
            <Route path={`/temperature`}>
                {/* <Temperature sensor = {state.slice(0).reverse()} /> */}
            </Route>
            <Route path={`/humidity`}>
                {/* <Humidity sensor = {state.slice(0).reverse()} /> */}
            </Route>
            <Route path={`/water`}>
                {/* <Water sensor = {state.slice(0).reverse()} /> */}
            </Route>
            <Route path={`/light`}>
                {/* <Light sensor = {state.slice(0).reverse()} /> */}
            </Route>
          </Switch>
        {/* </Router> */}
      </main>
    </Router>
    </div>
    </ThemeProvider>
  );
}