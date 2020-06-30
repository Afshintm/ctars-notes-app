import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
  },
  pos: {
    marginBottom: 12,
  },
      }));
    return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {this.state.notes.map((note) => {
          return (
            <Grid item xs={6} sm={3}>
            <div key={note.id}>
              <p>{note.text}</p>
              <Button color="primary">Edit</Button>
              <Button color="secondary">Delete</Button>
            </div>
            </Grid>

          );
        })}
      </Grid>
    </div>
    );
  }
}
export default NotesPage;
