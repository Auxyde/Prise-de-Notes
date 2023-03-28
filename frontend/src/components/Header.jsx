import React from "react";
import { MdStickyNote2 as Icon } from "react-icons/md";

function Header() {
    return (
        <header>
            <h1>
                <Icon viewBox="0 0 20 20" />
                &nbsp;Notepad
            </h1>
            <div className="header-right">
                <a href="#">Se connecter</a>
                <a href="#">S'inscrire</a>
            </div>
        </header>
    );
}

export default Header;
