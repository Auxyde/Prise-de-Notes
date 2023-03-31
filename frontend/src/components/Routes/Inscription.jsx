import Header from "../Header";
import Footer from "../Footer";

function Inscription() {
    return (
        <div>
            <div className="signup-block">
                <h2>Inscription</h2>
                <form className="forminscription">
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" id="nom" name="nom" placeholder="Nom" required />
                    </div>
                    <div className="form-group" id="prenom-group">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" id="prenom" name="prenom" placeholder="Prénom" required />
                    </div>
                    <div className="form-group" id="email-group">
                        <label htmlFor="email">Mail :</label>
                        <input type="email" id="email" name="email" placeholder="Mail" required />
                    </div>
                    <div className="form-group" id="password-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" required />
                    </div>
                    <button type="submit">S'inscrire</button>
                    <div className="login-link">
                        <a href="/connexion" style={{ color: "#f5ba13" }}>J'ai déjà un compte</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Inscription;
