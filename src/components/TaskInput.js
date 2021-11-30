import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function InputBox(props) {

  const onInput = (cb) => {
    const taskElement = document.getElementById("taskName");
    props.onInput({
      label: taskElement.value,
      verified: false
    });

    taskElement.value = "";
  }

  return (
    <div className="box">
      <TextField id="taskName" variant="standard" placeholder="Add something..."></TextField>
      <Button onClick={onInput}>Add</Button>
    </div>
  )
}

export default InputBox;