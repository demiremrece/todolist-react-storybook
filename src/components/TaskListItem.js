import React from "react";
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ListItem(props) {

  const isVerified = props.verified;
  const label = props.label;
  const id = props.taskId;

  const onDelete = () => {
    props.onDelete(id);
  }

  const onVerified = () => {
    props.onVerified(id);
  }


  const className = isVerified ? "box verified" : "box";
  return (
    <div className={className}>
      <label> { label } </label>
      <div className="controls">
        { !isVerified ? 
         <IconButton id="verifyButton" onClick={onVerified} color="success">
         <CheckIcon />
       </IconButton> : "" }
        
        <IconButton id="deleteButton" onClick={onDelete} color="error">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </div>
      {/* <CheckIcon /> */}
    </div>
  )
}

export default ListItem;