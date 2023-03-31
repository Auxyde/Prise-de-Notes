import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Inscription from './Routes/Inscription';
import Connexion from './Routes/Connexion';
import MyNotes from './Routes/MyNotes';
import AllNotes from './Routes/AllNotes';
import Authors from './Routes/Authors';
import Infos from './Routes/Infos';
import EditNote from './Routes/EditNote';
import Details from './Routes/Details';
import NotFound from './Routes/NotFound';
import CreateArea from './CreateArea';

function App() {

    const [isConnected, setIsConnected] = useState(true);
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

    function connexion() {
        setIsConnected(!isConnected);
        console.log("Connecté : " + isConnected);
    }

    return (
        <div>
            <BrowserRouter>
                <Header isConnected={isConnected} connect={connexion}/>
                {isConnected && <CreateArea
                    onAdd={addNote}/>}
                <Routes>
                    <Route path="/" element={<Main
                        notes={Notes}
                        onDel={delNote}
                        connect={connexion}/>}
                    />
                    <Route path="/inscription" element={<Inscription/>}/>
                    <Route path="/connexion" element={<Connexion/>}/>
                    <Route path="/mynotes" element={<MyNotes/>}/>
                    <Route path="/allnotes" element={<AllNotes/>}/>
                    <Route path="/authors" element={<Authors/>}/>
                    <Route path="/infos" element={<Infos/>}/>
                    <Route path="/editnote" element={<EditNote/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
