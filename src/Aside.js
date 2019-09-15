import React from 'react';
import './App.css';
import { createStore } from 'redux';

class Aside extends React.Component {
    render () {
        return (
            <aside>
                <button>Log In</button>
                <button>Sign Up</button>
            </aside>
        
        )
    }



}

export default Aside