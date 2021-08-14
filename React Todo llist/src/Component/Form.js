import React, { Component } from 'react';

export default class Form extends Component {
    initialState = {
        name: '',
        title: '',
    }

    state = this.initialState;

    handleOnchange = (e) => {
        let name, val;
        name = e.target.name;
        val = e.target.value;
        this.setState({ [name]: val });
    }

    //Submit all data
    handleSubmit = (e) => {
        e.preventDefault();
        const { formSubmit } = this.props;
        const { name, title } = this.state;
        if (name === '' || title === '') {
            alert('You must set value.');
            return null;
        }
        formSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, title } = this.state;
        return (
            <form className="mt-5" action="#">
                <h1>Add items.</h1>
                <div className="form-group mb-4">
                    <input
                        onChange={this.handleOnchange}
                        type="text"
                        name='name'
                        value={name}
                        placeholder="Type Name..."
                        className="form-control"
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        onChange={this.handleOnchange}
                        type="text"
                        name='title'
                        value={title}
                        placeholder="Type Title..."
                        className="form-control"
                    />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary mb-4">Submit</button>
            </form>
        )
    }
}
