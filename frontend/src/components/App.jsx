import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Inscription from './Routes/Inscription';
import Connexion from './Routes/Connexion';
import MyNotes from './Routes/MyNotes';
import Authors from './Routes/Authors';
import Infos from './Routes/Infos';
import EditNote from './Routes/EditNote';
import Details from './Routes/Details';
import NotFound from './Routes/NotFound';
import CreateArea from './CreateArea';

function App() {

    const [IsConnected, setIsConnected] = useState(true);
    const [Notes, setNotes] = useState([]);
    const [ToEdit, setToEdit] = useState(0);
    const [ToDetail, setToDetail] = useState(0);


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

    //Modification d'une note
    function modifieNote(id, title, content) {
        delNote(ToEdit)
        let note = {title, content};
        addNote(note)
    }

    // Edition d'une note
    function editNote(id) {
        setToEdit(prevState => {
            prevState = id;
            return prevState;
        })
    }

    function detailNote(id) {
        console.log("----------------------")
        setToDetail(prevState => {
            prevState = id;
            console.log("prevState : " + prevState)
            return prevState;
        });
        console.log("ToDetail : " + ToDetail)
    }


    // Connexion
    function connexion() {

        setIsConnected(!IsConnected);
    }

    return (
        <div>
            <BrowserRouter>
                <Header isConnected={IsConnected} connect={connexion}/>
                {IsConnected && <CreateArea
                    onAdd={addNote}/>}
                <Routes>
                    <Route path="/" element={<Main
                        notes={Notes}
                        onDel={delNote}
                        onEdit={editNote}
                        onDetail={detailNote}
                        connect={connexion}/>}
                    />
                    <Route path="/inscription" element={<Inscription/>}/>
                    <Route path="/connexion" element={<Connexion/>}/>
                    <Route path="/mynotes" element={<MyNotes
                        onEdit={editNote}
                    />}/>
                    <Route path="/allnotes" element={<Main
                        notes={Notes}
                        onDel={delNote}
                        onEdit={editNote}
                        onDetail={detailNote}
                        connect={connexion}/>}
                    />}/>
                    <Route path="/authors" element={<Authors/>}/>
                    <Route path="/infos" element={<Infos/>}/>
                    <Route path="/editnote" element={<EditNote
                        notes={Notes}
                        id={ToEdit}
                        onModifie={modifieNote}
                        onDetail={detailNote}
                    />}/>
                    <Route path="/details" element={<Details
                        notes={Notes}
                        id={ToDetail}
                        onEdit={editNote}
                    />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
