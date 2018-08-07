import React, {Component} from 'react'
import '../stylesheets/adminlte.css'

export default class MyToaster extends React.Component {
    constructor(props) {
        super(props);
        this.toaster = React.createRef();
        this.state = {
            message: props.message,
            show: false,
            no: 0
        };
        // this.state.message = this.props.message;
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleOpen = () => {

        this.setState({
            show: true
        }, () => {
            setTimeout(() => {
                this.setState({show: false})
            }, 3000)
        })

        this.setState({
            no: this.state.no + 1
        })
    }

    createtoaster = () => {

        if (this.state.show) {
            let toastmessage = [];
            for (let i=0, j = 0; i <= this.state.no && j < this.state.message.length; i++, j++) {

                let tmessage = <div className="snackbar" key = {j}>
                <div className="card-header">
                    <h3 className="card-title">Toast</h3>
                </div>

                <div className="card-body">
                    {this.state.message[j]}
                </div>

                <div className="card-footer">
                    
                </div>

            </div>
            toastmessage.push(tmessage);

            }
            return toastmessage;
        } else {
            return null;
        }
    };

    render() {
        return (
            <div className="col-md-2 offset-md-9">
                {< button className = "btn btn-primary" onClick = {
                    this.handleOpen
                }
                 
                > </button>}
                {this.createtoaster()}
              

            </div>
        )
    }
}
