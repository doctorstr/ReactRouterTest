import React from 'react'
export default class PostDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            details: []

        }

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
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
                        <strong>User Id</strong>
                        : {this.state.details.userId}</p>
                    <p>
                        <strong>Title</strong>
                        : {this.state.details.title}</p>
                    <p>
                        <strong>Body</strong>
                        : {this.state.details.body}</p>
                </div>
            </div>
        );

    }
}