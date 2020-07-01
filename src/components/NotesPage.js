import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class NotesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  componentDidMount(){
      this.setState(
          { notes:
            [
                {
                    id: 1,
                    text: "Simple Note1"
                },
                {
                    id: 2,
                    text: "Simple 22"
                },
                {
                    id: 3,
                    text: "Simple 33"
                },
                {
                    id: 4,
                    text: "Simple 44"
                },
                {
                    id: 5,
                    text: "Simple 55"
                },

            ]
        }
        );
  }

  deleteNote = (id,e) => {
    console.log('this is:', this);
    console.log('note:'+id);
    console.log('event:'+e);
  }

  render() {
    const classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          minWidth: 275,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
  },
      }));
    return (
      <Grid container spacing={3}>
        {this.state.notes.map((n) => {
          return (
            <Grid item xs={6} sm={3}>
              <Card key={n.id}>
                <CardContent>
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {n.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">Edit</Button>
                  <Button color="secondary">Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
export default NotesPage;
