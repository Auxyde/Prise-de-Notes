import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

function UserInfo() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/users/1")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .post("http://localhost:3001/users/token", { userId: 1 })
            .then((response) => {
                setToken(response.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                <p>
                    <strong>Token:</strong> {token}
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default UserInfo;