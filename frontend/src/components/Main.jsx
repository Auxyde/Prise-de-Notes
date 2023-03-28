import {BrowserRouter, Route, Routes} from "react-router-dom";
import Inscription from "./Routes/Inscription";
import Connexion from "./Routes/Connexion";
import NotFound from "./Routes/NotFound";
import App from "./App";
import MyNotes from "./Routes/MyNotes";
import AllNotes from "./Routes/AllNotes";
import Authors from "./Routes/Authors";
import Infos from "./Routes/Infos";

function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/inscription" element={<Inscription/>}/>
                <Route path="/connexion" element={<Connexion/>}/>
                <Route path="/mynotes" element={<MyNotes/>}/>
                <Route path="/allnotes" element={<AllNotes/>}/>
                <Route path="/authors" element={<Authors/>}/>
                <Route path="/infos" element={<Infos/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default Main;