import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const style = {
    Paper:{
        "padding":'20px',
        "margin":'10px',
        "height":'450px',
        "overflow":'auto',
        "text-transform":'capitalize',
    }
}

export default ({esercizi,
     gruppoMuscolare,
     onEsercizioSelected,
     esercizio:{
         id,
        titolo = 'Benvenuto!',
        descrizione= 'Seleziona un esercizio!'}})=>
    <Grid container>
            <Grid item xs>
                <Paper elevation={3} style={style.Paper}>
                    {esercizi.map(([gruppo,esercizi])=>
                    !gruppoMuscolare || gruppoMuscolare === gruppo ? 
                    <Fragment>
                        <Typography variant='h5'>
                            {gruppo}
                        </Typography>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {esercizi.map(({titolo,id})=>
                                <ListItem button>
                                     <ListItemText primary={titolo} onClick={() => onEsercizioSelected(id)}/>
                                </ListItem>                 
                            )}
                        </List>
                    </Fragment>
                    : null
                    )}
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper elevation={3} style={style.Paper}>
                              
                    <Fragment>
                        <Typography variant='h5'>
                        {titolo}
                        </Typography>
                        <Typography variant='subtitle1'>
                        {descrizione}
                        </Typography>
                    </Fragment>
                                            
                </Paper>
            </Grid>
    </Grid>

