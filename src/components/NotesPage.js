import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class NotesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote:{},
      count:0
    };
    this.index = -1;
  }
  componentDidMount(){
      // this.setState(
      //     { notes:
      //       [
      //           {
      //               id: 1,
      //               text: "Simple Note1"
      //           },
      //           {
      //               id: 2,
      //               text: "Simple 22"
      //           },
      //           {
      //               id: 3,
      //               text: "Simple 33"
      //           },
      //           {
      //               id: 4,
      //               text: "Simple 44"
      //           },
      //           {
      //               id: 5,
      //               text: "Simple 55"
      //           },

      //       ]
      //   }
      //   );
  }

  deleteNote = (id,e) => {
    let items=this.state.notes;
    items.splice(id,1);
    this.setState({notes:items});
  };

  changeNoteText= (e) => {
    this.setState({newNote:{text: e.target.value}});
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // eslint-disable-next-line
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  addNewNote = () => {
    let note = this.state.newNote;
    console.log(note.text);
    if(note.text !== undefined){
      note.guid = this.uuidv4();
      let notesNew = [...this.state.notes];
      notesNew.push(note);
      this.setState({notes:notesNew});
      this.inputTitle.value = "";
    }
    
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
      


      let cardList = [];
      let fields = Object.keys(this.state.notes);
      
      //console.log(fields);
      fields.forEach((cardIndex) => {
          let card = this.state.notes[cardIndex];
          cardList.push(
            <Grid item xs={6} sm={3} key={cardIndex}>
              <Card>
                <CardContent>
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">Edit</Button>
                  <Button color="secondary" onClick={(e) => this.deleteNote(cardIndex, e)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          )
      });


    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
            <div>
              <TextField
                id="filled-textarea"
                placeholder="Note here..."
                multiline
                variant="filled"
                ref={el => this.inputTitle = el}
                onChange={(e)=>this.changeNoteText(e)}
                type="reset"
              />
              
              <Button onClick={() => this.addNewNote()}>Add Note</Button>
            </div>
          
        </Grid>
        {/* {this.state.notes.map((n) => {
          return (
            <Grid item xs={6} sm={3} key={n.guid} value={n.text}>
              <Card>
                <CardContent>
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {n.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">Edit</Button>
                  <Button color="secondary" onClick={(e) => this.deleteNote(n.guid, e)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })} */}
        {cardList}
      </Grid>
    );
  }
}
export default NotesPage;
