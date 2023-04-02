import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

function Inscription() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { nom, prenom, email, password };
        axios
            .post("http://localhost:3001/users", newUser)
            .then(() => {
                console.log("Utilisateur ajouté avec succès!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Header />
            <div className="signup-block">
                <h2>Inscription</h2>
                <form className="forminscription" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Nom"
                            required
                            className="form-control"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom :</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Prénom"
                            required
                            className="form-control"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Mail :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Mail"
                            required
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de passe"
                            required
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        S'inscrire
                    </button>
                </form>
                <div className="login-link">
                    <a href="/connexion" style={{ color: "#f5ba13" }}>
                        J'ai déjà un compte
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Inscription;