import React from 'react'
import '../stylesheets/adminlte.css'
import Details from './userdetails'
import {Link} from 'react-router-dom'



export default class MyTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.pgNo,
           details : [],
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

    NextButton() {
        if (this.state.currentPage === this.MaxPages - 1) {
            return (null);
        } else {
            return (

                <button
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


    createTable = () => {

        let tableHeader = <thead>
            <tr>
                {this.props.columns.map(column => {
                        return <th key={column.name}>
                            {column.name}
                        </th>
                    })}
            </tr>

        </thead>;
        this.state.number = this.state.number + 1;
        let tableRows = [];
        for (let i = this.state.currentPage * this.props.maxItems; (i < (this.state.currentPage + 1) * this.props.maxItems) && (i <= this.props.data.length); i++) {
         
            this.state.id= i + 1;          
         
         let row = <Link to={{
            pathname: `/user-lists/details/${i+1}`
            
          }}>
         
          <tr key={i}>
                {this
                    .props
                    .columns
                    .map(column => {
                        this.state.id= i + 1; 
                        return (
                            <td key={column.key}>

                                {this.props.data[i][column.key]}

                            </td>
                        )
                    })}

            </tr>
</Link>
            tableRows.push(row)
            }
        for (let i = 0; i <= Math.ceil(this.props.data.length / this.props.maxItems); i++) {
            this.MaxPages = i;

        }

        let tableBody = <tbody>{tableRows}</tbody>;
        return <table>{tableHeader}{tableBody}
        </table>;
    }

    render() {

        return (
            <div className="col-md-6">
                <div className="container-fluid">
                    <div
                        className="table table-bordered"
                        style={{
                        marginLeft: "70%",
                        marginRight: "5%"
                    }}>
                        {this.createTable()}
                        {this.PrevButton()}
                        {this.NextButton()}
                    </div>
                   
                </div>
            </div>
        )
    }

}