import React from "react";
import { MdDelete as DeleteIcon } from "react-icons/md";

function Note(props) {
  function handleClick() {
    props.onDel(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={props.id} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
