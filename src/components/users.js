import React from 'react'
import MyTable from './table'
import {Router, Route, hashHistory} from 'react-router'
import Details from './userdetails';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        
        this.columns = [
            {
                name: "ID",
                key: "id"
            }, {
                name: "Name",
                key: "name"
            }, {
                name: "Username",
                key: "username"
            }, {
                name: "Email",
                key: "email"
            }, {
                name: "Website",
                key: "website"
            }
        ];
        
        this.maxItems = 5; 
    };
    
    state = {
        pgNo: 0,
        table: [],
        isFetching: true,
        url:"/user"
    
    };
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
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
            : (
              
                <MyTable pgNo ={this.state.pgNo}
                         maxItems = {this.maxItems}
                         columns={this.columns} 
                         data={this.state.table}
                         url={this.state.url}/>
            )
    }

}
