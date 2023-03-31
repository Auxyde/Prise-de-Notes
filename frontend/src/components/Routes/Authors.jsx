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

    const ExpandedComponent = ({ data }) => (
        <div className="user-notes">
            <h3>Notes de {data.firstName} {data.lastName}</h3>
            <DataTable
                title="Notes"
                columns={columns}
                data={data.notes}
                striped
                highlightOnHover
            />
        </div>
    );

    return (
        <div>
            <h1 className="Authorstitle">Les auteurs</h1>
            <div className="authors-block">
                <DataTable
                    title="Auteurs"
                    columns={[
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
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
        </div>
    );
}

export default Authors;
