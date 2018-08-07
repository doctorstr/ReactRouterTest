import React, {Component} from "react";

export default class AddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            website: "",
            company: ""
        }

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handlewebsiteChange(event) {
        this.setState({website: event.target.value});
    }
    handleusernameChange(event) {
        this.setState({user_name: event.target.value});
    }
    handleemailChange(event) {
        this.setState({email: event.target.value});
    }
    handlecompanyChange(event) {
        this.setState({company: event.target.value});
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log('Handle Submit');
        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: ['application/json'],
                body: JSON.stringify({user_name: "", company: "", website: "", email: ""})
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
            <div>
            <div className="row" >
                <div
                    className="col-md-3 offset-md-5"
                    style={{
                    marginTop: "10%",
                    width: "100%"
                }}>
                    
                    <form className="form" onSubmit={this.handleSubmit} method="GET" >
                    <div className="offset-md-1">
                    <h1>ADD A User</h1><br/>
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
                            <label>Website</label>
                        </div>

                        <div>
                            <input
                                id="website"
                                type="text"
                                required
                                onChange={this
                                .handlewebsiteChange
                                .bind(this)}/>
                        </div>
                        <div>
                            <label>company</label>
                        </div>

                        <div>
                            <input
                                id="company"
                                type="text"
                                required
                                onChange={this
                                .handlecompanyChange
                                .bind(this)}/>
                        </div>
                        <br/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{float:"right"}}>
                            Add Post
                        </button>

                    </form>
                </div>
            </div>
            </div>
        );
    }
}
