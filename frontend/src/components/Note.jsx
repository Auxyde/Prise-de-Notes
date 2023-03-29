import React from "react";
import {
    MdDelete as DeleteIcon,
    MdZoomIn as SearchIcon,
    MdEdit as EditIcon,
    MdOutlinePersonPin as AuthorIcon
} from "react-icons/md";

function Note(props) {
    function handleDel() {
        props.onDel(props.id);
    }
    function handleEdit(){
        props.onEdit(props.id)
    }

    function handleDetail(){
        props.onDetails(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <AuthorIcon className="author" title={"Author : "+ props.author}/>
            <p>{props.content}</p>
            <div className="action">
                <button id={props.id} onClick={handleDel}>
                    <DeleteIcon/>
                </button>
                <button id={props.id} onClick={handleEdit}>
                    <EditIcon/>
                </button>
                <button className="actionLeft" id={props.id} onClick={handleDetail}>
                    <SearchIcon/>
                </button>
            </div>
        </div>
    );
}

export default Note;
