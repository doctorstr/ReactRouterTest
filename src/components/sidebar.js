import '../stylesheets/adminlte.css'
import {Link} from 'react-router-dom'
import Fausers from 'react-icons/lib/fa/user'
import Fafile from 'react-icons/lib/fa/file'
import Fatimes from 'react-icons/lib/fa/times-circle'
import React from 'react'

export const Side = (props) => <aside className="main-sidebar sidebar-dark-primary elevation-4">

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
            <li>
                <Link to='/'>Home</Link>
            </li>&nbsp;
            <li>
                <Link to='/posts'><Fausers/>
                    Posts
                </Link>
            </li>&nbsp;
            <li>
                <Link to='/user'><Fafile/>
                    Users
                </Link>
            </li>&nbsp;
            <li>
                <Link to='*'><Fatimes/>
                    Whoops 404
                </Link>
            </li>

        </nav>

    </div>

</aside>