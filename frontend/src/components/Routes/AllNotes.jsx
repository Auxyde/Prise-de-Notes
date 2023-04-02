import React, { useState, useEffect } from "react";
import axios from "axios";

function AllNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/notes")
            .then((response) => setNotes(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Toutes les notes</h1>
            {notes.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Contenu</th>
                        <th>Auteur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notes.map((note) => (
                        <tr key={note._id}>
                            <td>{note.title}</td>
                            <td>{note.content}</td>
                            <td>{note.author}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Pas de note trouvé</p>
            )}
        </div>
    );
}

export default AllNotes;
