import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    addIcon : {
        display: "flex",
        justifyContent : 'center',
    }
  });
  
function CreateButton(props) {
    const classes = useStyles();
    return (
        <div className={classes.addIcon}> 
            <NoteAddIcon style={{cursor:'pointer'}} onClick={props.handleClick}/>
            <Typography style={{display:"inline-block"}} >Add a note</Typography>
        </div>
    )
}

export default CreateButton
