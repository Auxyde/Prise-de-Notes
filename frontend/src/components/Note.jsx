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

    function handleEdit() {
        props.onEdit(props.id);
    }

    function handleDetails() {
        props.onDetail(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <AuthorIcon className="author" title={"Author : " + props.author}/>
            <p>{props.content}</p>
            <p>id : {props.id}</p>
            <div className="action">
                <button onClick={handleDel}>
                    <DeleteIcon/>
                </button>
                <a href="/editnote">
                    <button onClick={handleEdit}>
                        <EditIcon/>
                    </button>
                </a>
                <a href="/details">
                    <button className="actionLeft" onClick={handleDetails}>
                        <SearchIcon/>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Note;
