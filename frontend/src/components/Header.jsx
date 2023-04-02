import React from "react";
import {MdStickyNote2 as Icon} from "react-icons/md";
import {NavLink} from "react-router-dom";
import Button from "bootstrap/js/src/button";

function Header(props) {
    const isConnected = props.connection;

    function compute(event) {
        event.preventDefault();
        props.connexionFct();
    }

    if (isConnected) {
        return (
            <header>
                <h1>
                    <Icon viewBox="0 0 20 20"/>
                    &nbsp;Notepad
                </h1>
                <div>
                    <NavLink className="a-link" to={"/mynotes"}>Mes Notes</NavLink>
                    <NavLink className="a-link" to={"/allnotes"}>Toutes les Notes</NavLink>
                    <NavLink className="a-link" to={"/authors"}>Auteurs</NavLink>
                    <NavLink className="a-link" to={"/infos"}>Mes Informations</NavLink>
                </div>
                <div className="header-right">
                    <button className="btn-link" onClick={compute}>Déconnexion</button>
                </div>
            </header>
        );
    } else {
        return (
            <header>
                <h1>
                    <Icon viewBox="0 0 20 20"/>
                    &nbsp;Notepad
                </h1>
                <div className="header-right">
                    <NavLink to={"/"}>Accueil</NavLink>
                    <NavLink to={"/inscription"}>Inscription</NavLink>
                    <NavLink to={"/connexion"}>Connexion</NavLink>
                </div>
            </header>);
    }

}

export default Header;
