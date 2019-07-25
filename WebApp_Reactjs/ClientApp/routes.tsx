import * as React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from '../ClientApp/src/Layouts/Layout';
import { Home } from '../ClientApp/src/screens/Home';
export const routes =
    <Layout>
        <Route exact path='/' component={Home} />
    </Layout>;