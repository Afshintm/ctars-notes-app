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
      editMode: false,
      value:'',
      id:-1
    };
    this.index = -1;
  }

  addNewNote = () => {
    let note = this.state.value;
    if(note!==''){
      const newNote ={id:++this.index,text:note}; 
      let allNotes = [...this.state.notes];
      allNotes.push(newNote);
      this.setState({notes:allNotes, value:''});
    }
  }

  deleteNote = (id,e) => {
    let items=this.state.notes;
    items.splice(id,1);
    this.setState({notes:items});
  };

  saveChanges = (e) =>{
    
    let allNotes = this.state.notes;
    allNotes[this.state.id].text = this.state.value;
    this.setState({notes:allNotes,value:'',id:-1,editMode:false});
  }

  editNote = (id,e) =>{
    let item = this.state.notes[id];
    this.setState({value:item.text,id:id,editMode:true});
  }

  changeNoteText= (e) => {
    this.setState({value: e.target.value});
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // eslint-disable-next-line
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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
        topgrid: {
          padding: theme.spacing(2),
          marginBottom: 2,
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
            <Grid item xs={6} sm={4} key={cardIndex}>
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
              <TextField
                id="filled-textarea"
                placeholder="Note here..."
                variant="filled"
                fullWidth
                value={this.state.value}
                onChange={(e) => this.changeNoteText(e)}
                inputRef={input => input && input.focus()}
              />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="primary" className={classes.paper}  onClick={() => this.addNewNote()} disabled={this.state.editMode}>Add Note</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="primary" className={classes.paper} onClick={() => this.saveChanges()} disabled={!this.state.editMode}>Save Chages</Button>
        </Grid>
        {cardList}
      </Grid>
    );
  }
}
export default NotesPage;
