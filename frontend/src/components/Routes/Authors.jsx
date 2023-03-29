import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import DataTable from 'react-data-table-component';

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

    const columns = [
        {
            name: 'Titre',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Contenu',
            selector: 'content',
            sortable: true,
        },
    ];

    const data = selectedUser ? selectedUser.notes : [];

    return (
        <div>
            <Header />
            <h1 className="Authorstitle">Les auteurs</h1>
            <div className="authors-block">
                <DataTable
                    title="Auteurs"
                    columns={[
                        {
                            name: '',
                            cell: row => <button onClick={() => handleUserClick(row)}>Notes</button>,
                            button: true,
                        },
                        {
                            name: 'Nom',
                            selector: 'lastName',
                            sortable: true,
                        },
                        {
                            name: 'Prénom',
                            selector: 'firstName',
                            sortable: true,
                        },
                        {
                            name: 'Email',
                            selector: 'email',
                            sortable: true,
                        },
                    ]}
                    data={users}
                    striped
                    highlightOnHover
                />
                {selectedUser && (
                    <div className="user-notes">
                        <h3>Notes de {selectedUser.firstName} {selectedUser.lastName}</h3>
                        <DataTable
                            title="Notes"
                            columns={columns}
                            data={data}
                            striped
                            highlightOnHover
                        />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Authors;
