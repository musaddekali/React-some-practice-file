import React, { Component } from 'react';
import List from './List';
import DataInput from './DataInput';

// Main ToDo component 
export default class ToDo extends Component {
    state = {
        clients: []
    }

    updateState = () => {
        if (localStorage.getItem('client') === null) {
            this.setState({ clients: [] });
        } else {
            this.setState({ clients: JSON.parse(localStorage.getItem('client')) });
        }
    }
    updateLocalState = (state) => {
        this.setState({ clients: state });
    }

    componentDidMount() {
        this.updateState();
    }

    // set state from DataInput component 
    handleState = (client) => {
        const { clients } = this.state;
        const clientData = [client, ...clients];
        localStorage.setItem('client', JSON.stringify(clientData));
        this.setState({
            clients: JSON.parse(localStorage.getItem('client'))
        });
    }
 
    //  Remove item 
    removeClient = (idIndex) => {
        const clients = JSON.parse(localStorage.getItem('client'));
        const getRemain = clients.filter((client) => {
            const id = client.id;
            return id !== idIndex;
        });
        localStorage.setItem('client', JSON.stringify(getRemain));
        this.updateLocalState(getRemain);
    }

    render() {
        const { clients } = this.state;

        return (
            <>
                <DataInput handleState={this.handleState} />
                <List clients={clients} removeClient={this.removeClient} />
            </>
        )
    }
}
