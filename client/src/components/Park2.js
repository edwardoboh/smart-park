import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import WifiIcon from '@material-ui/icons/Wifi';
// import BluetoothIcon from '@material-ui/icons/Bluetooth';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(0.5, 3),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

const parkTitle = {
  parkA: "Park A",
  parkB: "Park B",
  parkC: "Park C",
  parkD: "Park D"
}

export default function Park2(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["one"]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  useEffect(() => {
    formatPark(props.park, props.myPark)
  },[props])

  const formatPark = (park, myPark) => {
    let newChecked = []
    let parkData = park[myPark]
    console.log(parkData)
    let parkDataString = parkData.toString()
    if(parkDataString.indexOf("1") !== -1){
      newChecked.push("one")
    }if(parkDataString.indexOf("2") !== -1){
      newChecked.push("two")
    }if(parkDataString.indexOf("3") !== -1){
      newChecked.push("three")
    }if(parkDataString.indexOf("4") !== -1){
      newChecked.push("four")
    }
    setChecked(newChecked)
  }

  if(checked.length >= 4){
    return(
      <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {parkTitle[props.myPark]}
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography gutterBottom variant="h6">
                $4.50
              </Typography>
            </Grid> */}
          </Grid>
          {/* <Typography color="textSecondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
            hall.
          </Typography> */}
            <Divider/>
          <Typography style={{marginTop:"4rem", color:"gray"}} variant="h3">
            Occupied!
          </Typography>
        </div>
    )
  }else{
    return (
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {parkTitle[props.myPark]}
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography gutterBottom variant="h6">
                $4.50
              </Typography>
            </Grid> */}
          </Grid>
          {/* <Typography color="textSecondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
            hall.
          </Typography> */}
        </div>
        <Divider/>
        {/* <div className={classes.section2}>
          <Typography gutterBottom variant="body1">
            Select type
          </Typography>
          <div>
            <Chip className={classes.chip} label="Extra Soft" />
            <Chip className={classes.chip} color="primary" label="Soft" />
            <Chip className={classes.chip} label="Medium" />
            <Chip className={classes.chip} label="Hard" />
          </div>
        </div> */}
        {/* <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}> */}
        <List className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-slot1" primary="Slot 1" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                // onChange={handleToggle('wifi')}
                checked={checked.indexOf('one') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-slot2" primary="Slot 2" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                // onChange={handleToggle('bluetooth')}
                checked={checked.indexOf('two') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-slot2' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-slot3" primary="Slot 3" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                // onChange={handleToggle('wifi')}
                checked={checked.indexOf('three') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-slot3' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-slot4" primary="Slot 4" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                // onChange={handleToggle('bluetooth')}
                checked={checked.indexOf('four') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-slot4' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}
