import React from "react";
import {MdStickyNote2 as Icon} from "react-icons/md";
import {NavLink} from "react-router-dom";

function Header() {
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
        </header>
    );
}

export default Header;
