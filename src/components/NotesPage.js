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
      newNote:{}
    };
    this.index = -1;
    this.textInput = React.createRef();
  }
  componentDidMount(){
      
  }

  deleteNote = (id,e) => {
    let items=this.state.notes;
    items.splice(id,1);
    this.setState({notes:items});
  };
  editNote = (id,e) =>{
    let item = this.state.notes[id];
    this.textInput.current.value = item.text;
  }

  changeNoteText= (e) => {
    //this.setState({newNote:{text: e.target.value}});
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // eslint-disable-next-line
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  addNewNote = () => {
    let note = this.textInput.current.value;
    console.log(note);
    if(note!==''){
      const newNote ={id:++this.index,text:note}; 
      let allNotes = [...this.state.notes];
      allNotes.push(newNote);
      this.setState({notes:allNotes});
      this.textInput.current.value = null;
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
                  <Button color="primary" onClick={(e)=> this.editNote(cardIndex, e) }>Edit</Button>
                  <Button color="secondary" onClick={(e) => this.deleteNote(cardIndex, e) }>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          )
      });


    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
              <TextField
                id="filled-textarea"
                placeholder="Note here..."
                variant="filled"
                inputRef={this.textInput}
                onChange={(e) => this.changeNoteText(e)}
              />
              
              <Button onClick={() => this.addNewNote()}>Add Note</Button>
        </Grid>
        {cardList}
      </Grid>
    );
  }
}
export default NotesPage;
