import {Link} from "react-router-dom";
import React, {Component} from "react";

export default class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            title: "",
            body: ""
        }

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handletitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleusernameChange(event) {
        this.setState({user_name: event.target.value});
    }
    handleemailChange(event) {
        this.setState({email: event.target.value});
    }
    handlebodyChange(event) {
        this.setState({body: event.target.value});
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log('Handle Submit');
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: ['application/json'],
                body: JSON.stringify({user_name: "", body: ""})
            })
            .then(response => response.json())
            .then(function (res) {
                console.log(res);

            });

        console.log(this.props.history);
        this
            .props
            .history
            .goBack();
    }

    render() {
        return (
            <div className="row">
                <div
                    className="col-md-3 offset-md-6"
                    style={{
                    marginTop: "10%",
                    width: "100%"
                }}>
                    
                    <form className="form"  onSubmit={this.handleSubmit} method="GET" style={{align : "center"}}>
                   
                        <div className="offset-md-1">
                        <h3>ADD A POST</h3><br/>
                        <div>
                            <label>User Name</label>
                        </div>

                        <div>
                            <input
                                id="user_name"
                                type="text"
                                required
                                onChange={this
                                .handleusernameChange
                                .bind(this)}/>
                        </div>

                        <div>
                            <label>Email</label>
                        </div>

                        <div>
                            <input
                                id="email"
                                type="email"
                                required
                                onChange={this
                                .handleemailChange
                                .bind(this)}/>
                        </div>
                        <div>
                            <label>Title</label>
                        </div>

                        <div>
                            <input
                                id="title"
                                type="text"
                                required
                                onChange={this
                                .handletitleChange
                                .bind(this)}/>
                        </div>
                        <div>
                            <label>Body</label>
                        </div>

                        <div>
                            <input
                                id="body"
                                type="text"
                                required
                                onChange={this
                                .handlebodyChange
                                .bind(this)}/>
                        </div>
                        <br/>
                        </div>
                        <button type="submit" style={{float:"right"}} className="btn btn-primary">
                            Add Post
                        </button>
                      
                    </form>
                </div>
            </div>
        );
    }
}
