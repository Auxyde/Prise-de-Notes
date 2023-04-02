import React, { useState } from "react";
import axios from "axios";

function Connexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", {
                email,
                password,
            })
            .then((response) => {
                // Si la connexion est réussie, rediriger vers une page de succès
                window.location.href = "/success";
            })
            .catch((error) => {
                // Afficher un message d'erreur si la connexion a échoué
                setErrorMessage("Adresse email ou mot de passe incorrect.");
            });
    };

    return (
        <div>
            <h2 className="connexion">Connexion</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <div className="login-block">
                <form className="formconnexion" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Mail :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group" id="password-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de passe"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Valider</button>
                    <div className="signup-link">
                        <a href="/inscription">Je n'ai pas de compte</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Connexion;

