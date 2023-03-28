
import Header from "../Header";
import Footer from "../Footer";

function Connexion() {

    return (
        <div>
            <Header/>
            <div className="login-block">
                <h2>Connexion</h2>
                <form className="formconnexion">
                    <div className="form-group">
                        <label htmlFor="email">Mail :</label>
                        <input type="email" id="email" name="email" placeholder="Mail" required/>
                    </div>
                    <div className="form-group" id="password-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" required/>
                    </div>
                    <button type="submit">Valider</button>
                    <div className="signup-link">
                        <a href="/inscription">Je n'ai pas de compte</a>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>

    )
};

export default Connexion;