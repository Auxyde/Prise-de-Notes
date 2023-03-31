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

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <AuthorIcon className="author" title={"Author : " + props.author}/>
            <p>{props.content}</p>
            <div className="action">
                <button id={props.id} onClick={handleDel}>
                    <DeleteIcon/>
                </button>
                <a href="/editnote">
                    <button id={props.id}>
                        <EditIcon/>
                    </button>
                </a>
                <a href="/details">
                    <button className="actionLeft" id={props.id}>
                        <SearchIcon/>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Note;
