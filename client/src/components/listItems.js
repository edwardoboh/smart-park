import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
// import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import PoolIcon from '@material-ui/icons/Pool';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import CloudIcon from '@material-ui/icons/Cloud';
import OpacityIcon from '@material-ui/icons/Opacity';
import AssignmentIcon from '@material-ui/icons/Assignment';


export function MainListItems(props){
  let {history} = props
  return(
    <div>
      <ListItem button onClick={() => history.push(`/`)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/temperature`)}>
        <ListItemIcon>
          <OfflineBoltIcon />
        </ListItemIcon>
        <ListItemText primary="Temperature" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/humidity`)}>
        <ListItemIcon>
          <OpacityIcon />
        </ListItemIcon>
        <ListItemText primary="Humidity" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/water`)}>
        <ListItemIcon>
          <PoolIcon />
        </ListItemIcon>
        <ListItemText primary="Water Level" />
      </ListItem>
      {/* <ListItem button onClick={() => history.push(`/light`)}>
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
        <ListItemText primary="Light" />
      </ListItem> */}
    </div>
  )
}

export function SecondaryListItems(){
  return (
    <div>
      <ListSubheader inset>Saved Data</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem> */}
    </div>
  )
}