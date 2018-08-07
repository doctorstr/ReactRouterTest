import React from 'react'
import '../stylesheets/adminlte.css'
import Details from './userdetails'
import {Link, hashHistory} from 'react-router-dom'
import Faplus from 'react-icons/lib/fa/plus'

export default class MyTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.pgNo,
            details: [],
            id: null
        }
        this.MaxPages = 0;

    }

    PrevButton() {

        if (this.state.currentPage === 0) {
            return (null);
        } else {
            return (
                <button
                    className="btn btn-primary"
                    type="button"
                    key={this.state.currentPage}
                    style={{
                    float: "left"
                }}
                    onClick=
                    { () => { this.setState({ currentPage: this.state.currentPage - 1 }) } }>
                    Previous Page
                </button>
            );
        }

    }
    FirstButton() {

        if (this.state.currentPage === 0) {
            return (null);
        } else {
            return (
                <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                    float: "left"
                }}
                    onClick=
                    { () => { this.setState({ currentPage: 0 }) } }>
                    First page
                </button>
            );
        }

    }

    NextButton() {
        if (this.state.currentPage === this.MaxPages - 1) {
            return (null);
        } else {
            return (

                <button
                    className="btn btn-primary"
                    style={{
                    float: "right"
                }}
                    key={this.props.pgNo}
                    onClick={() => {
                    this.setState({
                        currentPage: this.state.currentPage + 1
                    })
                }}>
                    Next Page
                </button >
            );
        }
    }
    LastButton() {
        if (this.state.currentPage === this.MaxPages - 1) {
            return (null);
        } else {
            return (

                <button
                    className="btn btn-primary"
                    style={{
                    float: "right"
                }}
                    onClick={() => {
                    this.setState({
                        currentPage: this.MaxPages - 1
                    })
                }}>
                    Last Page
                </button >
            );
        }
    }
    AddButton() {
        return (
            <Link to={`${this.props.url}/addnew${this.props.url}`}>

                <button
                    style={{
                    float: "right"
                }}
                    className="btn btn-primary"><Faplus/>
                </button>

            </Link>
        );
    }

    createTable = () => {

        let tableHeader = <thead>
            <tr>
                {this
                    .props
                    .columns
                    .map(column => {
                        return <th key={column.name}>
                            {column.name}
                        </th>
                    })}
            </tr>

        </thead>;
        this.state.number = this.state.number + 1;
        let tableRows = [];
        for (let i = this.state.currentPage * this.props.maxItems; (i < (this.state.currentPage + 1) * this.props.maxItems) && (i <= this.props.data.length); i++) {

            this.state.id = i + 1;

            let row = <tr key={i}>
                {this
                    .props
                    .columns
                    .map(column => {
                        this.state.id = i + 1;
                        return (
                            <td key={column.key}>

                                <Link to={`${this.props.url}/details/${i + 1}`}>
                                    {this.props.data[i][column.key]}</Link>

                            </td>
                        )
                    })}

            </tr>

            tableRows.push(row)
        }
        for (let i = 0; i <= Math.ceil(this.props.data.length / this.props.maxItems); i++) {
            this.MaxPages = i;

        }

        let tableBody = <tbody className="name">{tableRows}</tbody>;
        return <table
            style={{
            marginTop: "10%",
            width: "100%"
        }}>{tableHeader}{tableBody}
        </table>;
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-2 offset-md-10">{this.AddButton()}</div>
                <div className="col-md-8 offset-md-3 table ">

                    {this.createTable()}

                </div>
                <div className="col-md-8 offset-md-3">
                    {/* {this.FirstButton()} */}
                    {this.PrevButton()}

                    {this.NextButton()}
                    {/* {this.LastButton()} */}
                </div>
            </div>
        )
    }

}