import React, { Component } from 'react'
import   {Route,IndexRoute,BrowserRouter,Switch}  from 'react-router-dom'
import {Home} from './home'
import Table from './users'
import Details from './userdetails';
import Posts from './posts'
import {Whoops404} from './whoops404'
import '../stylesheets/adminlte.css'
import {Side} from './sidebar'

class App extends Component {
    render () {
      return (
          <div>
              <BrowserRouter>
                <div>
                  <Route component={Side}/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/posts" component={Posts}/>
                      <Route path="/user-lists" component={Table}/>
                      <Route path="/user-lists/details/:id" component={Details}/>
                      <Route path="*" component={Whoops404}/>
                  </Switch>
                </div>
              </BrowserRouter>
          </div>
      )
    }
  }
  
  
  export default App