import React, {Component} from 'react'
import {Route, IndexRoute, BrowserRouter, Switch} from 'react-router-dom'
import {Home} from './home'
import Table from './users'
import UserDetails from './userdetails'
import PostDetails from './postdetails'
import Posts from './posts'
import {Whoops404} from './whoops404'
import '../stylesheets/adminlte.css'
import {Side} from './sidebar'
import AddNew from './addnewpost'
import AddNewUser from './addnewuser'
import MyCard from './postcard'
import '../stylesheets/adminlte.css'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>

                        <Route component={Side}/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/posts" component={Posts}/>
                            <Route exact path="/user" component={Table}/>
                            <Route path="/user/details/:id" component={UserDetails}/>
                            <Route path="/posts/details/:id" component={PostDetails}/>
                            <Route exact path="/posts/addnew/posts" component={AddNew}/>
                            <Route exact path="/user/addnew/user" component={AddNewUser}/>

                            <Route path="*" component={Whoops404}/>

                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App