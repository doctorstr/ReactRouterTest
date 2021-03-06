import React from 'react'
import {Link} from 'react-router'
import MyTable from './table'
export default class UserDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            details: []

        }

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            .then(response => response.json())
            .then(res => {

                this.setState({details: res, isFetching: false});

            });

    }

    render() {

        return (
            <div className="row">
                <div
                    className="col-md-8 offset-md-3"
                    style={{
                    marginTop: "10%",
                    width: "100%"
                }}>
                    <h1>Details</h1>
                    <p>
                        <strong>ID</strong>
                        : {this.state.details.id}</p>
                    <p>
                        <strong>Name</strong>
                        : {this.state.details.name}</p>
                    <p>
                        <strong>UserName</strong>
                        : {this.state.details.username}</p>
                    <p>
                        <strong>Phone</strong>
                        : {this.state.details.phone}</p>
                    <p>
                        <strong>Website</strong>
                        : {this.state.details.website}</p>
                    <p>
                        <strong>Email</strong>
                        : {this.state.details.email}</p>

                </div>
            </div>
        );

    }
}