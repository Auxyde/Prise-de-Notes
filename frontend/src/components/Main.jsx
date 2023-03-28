import {BrowserRouter, Route, Routes} from "react-router-dom";
import Inscription from "./Routes/Inscription";
import Connexion from "./Routes/Connexion";
import NotFound from "./Routes/NotFound";
import App from "./App";

function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/inscription" element={<Inscription/>}/>
                <Route path="/connexion" element={<Connexion/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default Main;