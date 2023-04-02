import Note from "./Note";
import React from "react";

function Main(props) {

    function delNote(itemId) {
        props.onDel(itemId);
    }

    function connect() {
        props.connect();
    }

    function addNote(note) {
        props.onAdd(note);
    }

    function onDetail(itemId) {
        props.onDetail(itemId);
    }

    const notes = props.notes;

    return (
        <div>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDel={delNote}
                        onDetail={onDetail}
                        author="Moi"
                    />
                );
            })}
            <button className="button" onClick={connect}>
                Connexion
            </button>
        </div>
    );
}

export default Main;
