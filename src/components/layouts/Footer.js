import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



function Footer(props) {
  const valueIndex = props.gruppoMuscolare ? props.muscoli.findIndex(gruppo => gruppo === props.gruppoMuscolare) + 1 : 0
  const classes = useStyles();
  // const [ setValue] = React.useState(0);

  const onIndexChange = (event, value) => {
   props.onSelect(value === 0 ? '': props.muscoli[value - 1])
  };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Paper className={classes.root}>
      <Tabs
        // value={value}
        value={valueIndex}
        onChange={onIndexChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
         <Tab label='all'/>
        {props.muscoli.map((muscolo,index) => (
          <Tab label={muscolo} key={index}/>
        ))}
      </Tabs>
    </Paper>
  );
}
export default Footer