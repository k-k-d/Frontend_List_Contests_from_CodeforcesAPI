import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContestPage from './components/ContestPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {App}/>
            <Route path = "/contest/:id" component = {ContestPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// ReactDOM.render(<App/>, document.getElementById('root'));