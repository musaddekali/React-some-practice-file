import React, { Component } from 'react'
import { nanoid } from "nanoid";

export default class DataInput extends Component {
    initialState = {
        name: '',
        job: '',
        id: '',
        time: ''
    }
    state = this.initialState;

    // Get data from input 
    handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    // Set a unick Id in the state when 'mouseEnter' on 'add' button 
    handleStateId = () => {
        this.setState({ id: nanoid(), time: new Date().toLocaleString() });
    }
    //    send data  to main ToDo Component and set this state blank
    handleClick = (e) => {
        e.preventDefault();
        // return null if boxes are blank 
        if (this.state.name === '' || this.state.job === '') {
            alert('Please fill the box');
            return null;
        }
        this.props.handleState(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;
        return (
            <form className="shadow p-4 mb-4">
                <h3>Enter Your Client Name And Job.</h3>
                <label htmlFor="name" className="form-group d-block mb-2">
                    <input
                        className="form-control"
                        onChange={this.handleOnChange}
                        value={name}
                        name="name"
                        type="text"
                        placeholder="Name..."
                    />
                </label>
                <label htmlFor="job" className="form-group d-block mb-2">
                    <input
                        className="form-control"
                        onChange={this.handleOnChange}
                        value={job}
                        name="job"
                        type="text"
                        placeholder="Job..."
                    />
                </label>
                <button className="btn btn-primary border-0 my-2" onClick={this.handleClick} onMouseEnter={this.handleStateId}>Add</button>
            </form>
        )
    }

}

