import React, { useState } from "react";
import {
    MdDelete as DeleteIcon,
    MdZoomIn as SearchIcon,
    MdEdit as EditIcon,
    MdOutlinePersonPin as AuthorIcon,
    MdSave as SaveIcon
} from "react-icons/md";

function Note(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

    function handleDel() {
        props.onDel(props.id);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    function handleDetail() {
        props.onDetails(props.id);
    }

    function handleSave() {
        props.onSave(props.id, title, content);
        setIsEditing(false);
    }

    return (
        <div className="note">
            {isEditing ? (
                <div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button onClick={handleSave}>
                        <SaveIcon />
                    </button>
                </div>
            ) : (
                <div>
                    <h1>{title}</h1>
                    <AuthorIcon className="author" title={"Author : " + props.author} />
                    <p>{content}</p>
                    <div className="action">
                        <button id={props.id} onClick={handleDel}>
                            <DeleteIcon />
                        </button>
                        <button id={props.id} onClick={handleEdit}>
                            <EditIcon />
                        </button>
                        <button className="actionLeft" id={props.id} onClick={handleDetail}>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Note;
