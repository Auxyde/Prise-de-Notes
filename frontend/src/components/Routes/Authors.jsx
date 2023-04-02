import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import DataTable from 'react-data-table-component';
import axios from "axios";

function Authors() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const columns = [
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
    ];

    const ExpandedComponent = ({ data }) => (
        <div className="user-notes">
            <h3>Notes de {data.firstName} {data.lastName}</h3>
            <DataTable
                title="Notes"
                columns={[
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
                ]}
                data={data.notes}
                striped
                highlightOnHover
            />
        </div>
    );

    return (
        <div>
            <Header />
            <h1 className="Authorstitle">Les auteurs</h1>
            <div className="authors-block">
                <DataTable
                    title="Auteurs"
                    columns={columns}
                    data={users}
                    striped
                    highlightOnHover
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Authors;