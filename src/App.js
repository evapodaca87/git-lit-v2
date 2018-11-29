import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/navigation';
import Splash from './Components/splash'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='main'>
                    <BrowserRouter>
                        <div>
                            <Navigation />
                            <Switch>
                                <Route path='/' component={Splash} exact />
                                <Route path='/home' component={Home} exact />
                                <Route path='/profile' component={Profile} exact />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
