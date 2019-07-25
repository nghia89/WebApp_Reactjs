import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {Layout} from '../Layouts/Layout';
import history from '../routers/history'

import { Home } from '../screens/Home';


export const routes = <Router history={history}>
    <Layout>
        <Switch>
            <Route exact path='/data' component={Home} />
        </Switch>
    </Layout>
</Router>