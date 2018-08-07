import React from 'react'
import '../stylesheets/adminlte.css'
import Details from './userdetails'
import {Link, hashHistory} from 'react-router-dom'
import Faplus from 'react-icons/lib/fa/plus'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toaster from './toaster';

export default class MyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.pgNo,
            details: [],
            id: null,
            index: 0
        }
        this.message = ['A','b','c'];
    }

    // LastButton() {     if (this.state.index === this.props.data.length) { return
    // (null);     } else {         return (             <button    className="btn
    // btn-primary"                 style={{ float: "right"             }}
    // onClick={() => {  this.setState({                     index: this.state.index
    // + 5    })             }}>                 Show more    </button >  );     } }
    // PreviousButton() {     if (this.state.index === 5) { return (null);     }
    // else {         return (             <button className="btn btn-primary"
    //           style={{ float: "Left"  }}                 onClick={() => {
    // this.setState({ index: this.state.index - 5   })             }}>
    //    Show Less          </button > );     } }
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
    closeAfter7 = () => toast("7 Kingdoms", {autoClose: 7000});

    fetchMoreData = () => {
        if(this.state.index<100){
        this.setState({
            index: this.state.index + 5
        })
    }}
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.fetchMoreData();
    }

    onScroll = () => {
        $(window).scroll(() => {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                this.fetchMoreData();
            }
        });
    }

    createCard = () => {
        let cardBody = [];
        for (let i = this.state.currentPage; i < this.state.index; i++) {

            let card = <div className="content">
                <div className="container-fluid">

                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title"></h3>
                            </div>

                            <div className="card-body">
                                <h5>
                                    ID :
                                </h5>{this.props.data[i].id}<br/>
                                <h5>
                                     User ID :
                                </h5>{this.props.data[i].userId}<br/>
                                <h5>
                                    Title :
                                </h5>{this.props.data[i].title}<br/>
                                <h5>
                                                Body :
                                </h5>{this.props.data[i].body}<br/>

                            </div>

                            <div className="card-footer clearfix"></div>
                        </div>

                    </div>
                </div>
            </div>
            cardBody.push(card);
        }
        return (cardBody)

    }
    render() {

        return (
            <div className="row">
                <div className="col-md-2 offset-md-10">{this.AddButton()}
                
                </div>
              {this.closeAfter7()}
                
                {/* <div id="snackbar" style={{backgroundColor: "red"}}>Hogaya.</div> */}
                
                <div>
                <Toaster message={this.message}/>
                    {this.createCard()}
                </div>
            </div>
        )
    }

}
