import React, { Component } from 'react'
import { Router, Route,browserHistory,IndexRoute,Switch } from 'react-router'
import {Home} from './home'
import Table from './users'
import Details from './userdetails';
import Posts from './posts'
import {Whoops404} from './whoops404'
import '../stylesheets/adminlte.css'
import { IndexLink } from 'react-router'
import Fausers from 'react-icons/lib/fa/user'
import Fafile from 'react-icons/lib/fa/file'
import Fatimes from 'react-icons/lib/fa/times-circle'


class App extends Component {
  render () {
    return (
      
        <div>
            <p>Hello there</p>
        </div>
      
    )
  }
}


export default App