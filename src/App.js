import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NotesPage  from "./components/NotesPage";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topgrid: {
    padding: theme.spacing(2),
    marginTop: 1
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
      <Grid container spacing={2} className={classes.topgrid}>
        <Grid item xs={12}>
          <NotesPage></NotesPage>
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
