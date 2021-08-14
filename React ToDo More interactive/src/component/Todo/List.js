import React from 'react';

// todo item stracture
 const List = (props) => {
    const { clients, removeClient } = props;

    const list = clients.map((client, i) => {
        return (<div key={client.id} className="slow card my-2">
            <div className="card-body">
                <h3 className="title">{client.name}</h3>
                <p className="job">{client.job}</p>
                <p className="post-time">{client.time}</p>
                <button onClick={() => removeClient(client.id)} className="btn btn-danger">Remove</button>
            </div>
        </div>)
    });
    return <div className="container">{list}</div>
}
export default List;





