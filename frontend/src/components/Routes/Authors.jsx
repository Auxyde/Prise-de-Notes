import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Authors() {
    const users = [
        {
            id: 1,
            firstName: "MAXIME",
            lastName: "PERRIER",
            email: "maxime.perrier@example.com",
            notes: [
                {
                    title: "Recette de chips",
                    content: "patate frite oeeeeeeeeee",
                },
                {
                    title: "Nettoyer la baraque",
                    content: "- Acheter produit" +
                        "- Je sais pas" +
                        "Pourquoi pas",


                },
            ],
        },
        //...
    ];

    const [selectedUser, setSelectedUser] = React.useState(null);

    function handleUserClick(user) {
        setSelectedUser(user);
    }

    return (
        <div>
            <Header />
            <h1 className="Authorstitle">Les auteurs</h1>
            <div className="authors-block">
                <table className="authors-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <button onClick={() => handleUserClick(user)}>Notes</button>
                            </td>
                            <td>{user.lastName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {selectedUser && (
                    <div className="user-notes">
                        <h3>Notes de {selectedUser.firstName} {selectedUser.lastName}</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Contenu</th>
                            </tr>
                            </thead>
                            <tbody>
                            {selectedUser.notes.map((note, index) => (
                                <tr key={index}>
                                    <td>{note.title}</td>
                                    <td>{note.content}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Authors;
