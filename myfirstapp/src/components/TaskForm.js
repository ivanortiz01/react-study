import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log("OnSubmit");
        // console.log(this.state);
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Write a Task" onChange={this.onChange} value={this.state.title} />
                <br />
                <textarea name="description" placeholder="Write a description" onChange={this.onChange} value={this.state.description} />
                <br />
                <button type="submit">Save Task</button>
            </form>
        );
    }
}