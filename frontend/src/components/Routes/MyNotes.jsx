import React, { useState, useEffect } from "react";
import axios from "axios";

function MyNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/notes")
            .then((response) => {
                setNotes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredNotes = notes.filter(
        (note) => note.userId === 1 // Remplacer "1" par l'id de l'utilisateur en cours
    );

    return (
        <div>
            <h1>My Notes</h1>
            <ul>
                {filteredNotes.map((note) => (
                    <li key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyNotes;