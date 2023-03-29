import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function UserInfo() {
    const user = {
        id: 1,
        firstName: "Maxime",
        lastName: "Perrier",
        email: "maxime.perrier@example.com",
        myNotes: 5,
        totalNotes: 20,
    };

    return (
        <div>
            <Header />
            <h1 className="Authorstitle">Informations</h1>
            <div className="user-info-block">
                <h2>Information</h2>
                <hr />
                <p>
                    <strong>Nom:</strong> {user.lastName}
                </p>
                <p>
                    <strong>Prénom:</strong> {user.firstName}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <h2>Activités</h2>
                <hr />
                <p className="information">
                    <strong>Articles:</strong>{" "}
                    <a className="informationlink" href="/mynotes">
                        <span className="nbarticle">{user.myNotes}</span>
                    </a>
                </p>
                <p className="information">
                    <strong>Total:</strong>{" "}
                    <a className="informationlink" href="/allnotes">
                        <span className="nbarticle">{user.totalNotes}</span>
                    </a>
                </p>
                <h2>Token</h2>
                <hr />
                {/* Code pour afficher le token */}
            </div>
            <Footer />
        </div>
    );
}

export default UserInfo;
