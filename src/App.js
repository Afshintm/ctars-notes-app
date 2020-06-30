import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import NotesPage  from "./components/NotesPage";


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        note taking App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function App() {
  
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button className={classes.button}>Add Note</Button>
        </Grid>
        <Grid item xs={12}>
          <NotesPage></NotesPage>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <span>This is a test</span><br/>
            <Button variant="contained" color="primary">Edit</Button>
              <Button variant="contained" color="secondary">Delete</Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}

export default App;
