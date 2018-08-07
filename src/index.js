import React from 'react'
import {render} from 'react-dom'
import {Menu} from './components/header'
import {MainMenu} from './components/main'
import {ControlBar} from './components/sidebar2'
import {Footer} from './components/footer'
import App from './components/app';
import {Side} from './components/sidebar'
import {Router} from 'react-router';
window.React = React;

render(<div>
    <App/>
</div>, document.getElementById('react-container'))