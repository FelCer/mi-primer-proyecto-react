import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
/**
 * Routers
 */
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import Notfound from '../containers/Notfound.jsx';

/**
 * Components
 */

import Layout from '../components/Layout.jsx';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={Notfound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;