import React from 'react'
import {Link} from 'react-router'
import MyTable from './table'
export default class Details extends React.Component{

constructor(props){
    super(props);

    this.state = {
       details : []

    }
 



}

componentDidMount() {
   
  
    fetch(this.props.url + this.props.id)
        .then(response => response.json())
        .then(res => {
            this.setState({details: res, isFetching: false});
         
        });
        
      

    }

    
render(){
    
    return (
     <div>
         {this.state.details}
</div>);
 

}
}