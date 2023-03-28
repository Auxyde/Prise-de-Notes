import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {

    const [Notes, setNotes] = useState([]);

    //Au chargement, on prend les données déjà stockées
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notepad"));
        setNotes(notes || []);
    }, []);

    //À chaque modification, on met à jour
    useEffect(() => {
        localStorage.setItem("notepad", JSON.stringify(Notes));
    }, [Notes]);

    //Ajout d'une note
    function addNote(note) {
        setNotes((oldvalues) => {
            return [note, ...oldvalues];
        });
    }

    //Suppression d'une note
    function delNote(itemId) {
        setNotes((oldNotes) => {
            return oldNotes.filter((item, index) => index !== itemId);
        });
    }
    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {Notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDel={delNote}
                    />
                );
            })}
            <Footer/>
        </div>
    )
}

export default App;
