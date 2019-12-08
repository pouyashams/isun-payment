import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import SuccessPayment from './components/success-payment';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/success" component={SuccessPayment} />
            <Route path="/" component={App} />
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
