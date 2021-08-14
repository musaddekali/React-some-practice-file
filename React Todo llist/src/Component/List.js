import React from 'react';

export default function List(props) {
    const { clients, deleteClient } = props;

    return (
        <div className="clients">
            <Items clients={clients} deleteClient={deleteClient}/>
        </div>
    )
}

const Items = (props) => {
    const date = new Date();
    const item = props.clients.map((client, i) => {
        return (
            <ul key={i} className="list-unstyled client">
                <li>{client.name}</li>
                <li>{client.title}</li>
                <li><button onClick={() => props.deleteClient(i)} className="btn btn-danger shadow my-3">Remove</button></li>
                <li><small>Posted</small></li>
            </ul>
        )
    });
    return <>{item}</>;
}

