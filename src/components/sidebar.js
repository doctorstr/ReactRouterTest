import '../stylesheets/adminlte.css'
import { IndexLink } from 'react-router'
import Fausers from 'react-icons/lib/fa/user'
import Fafile from 'react-icons/lib/fa/file'
import Fatimes from 'react-icons/lib/fa/times-circle'
import React from 'react'

export const Side = () => 

<aside className="main-sidebar sidebar-dark-primary elevation-4">

    <a href="#" className="brand-link">
        <span className="brand-text font-weight-light">Dashboard</span>
    </a>

    <div className="sidebar">

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
                <a href="#" className="d-block">Irtaza</a>
            </div>
        </div>

        <nav className="mt-2">
        <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>&nbsp;
        <li><IndexLink activeClassName='active' to='/posts'><Fausers /> Posts  </IndexLink></li>&nbsp;
        <li><IndexLink activeClassName='active' to='/user-lists'><Fafile/> Users </IndexLink></li>&nbsp;
        <li><IndexLink activeClassName='active' to='*'><Fatimes/> Whoops 404 </IndexLink></li>
        
     </nav>
    </div>

</aside>