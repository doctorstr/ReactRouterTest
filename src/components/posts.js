import React from 'react'
import MyTable from './table'
import MyCard from './postcard';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                name: "ID",
                key: "id"
            }, {
                name: "Title",
                key: "title"
            }, {
                name: "Body",
                key: "body"
            }
        ];

        this.maxItems = 4;
    };

    state = {
        pgNo: 0,
        table: [],
        isFetching: true,
        url: "/posts"
    };
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(res => {
                this.setState({table: res, isFetching: false});

            });

    }

    render() {
        return this.state.isFetching
            ? (
                <div
                    className="loader"
                    style={{
                    marginLeft: "50%"
                }}>
                    <img src="/assets/index.svg"/>
                </div>
            )
            : (<MyCard
                pgNo
                ={this.state.pgNo}
                maxItems={this.maxItems}
                columns={this.columns}
                data={this.state.table}
                url={this.state.url}/>)
    }

}
