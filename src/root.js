import {Provider} from "react-redux";
import {Router, Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";
import  MessengerApp from  './containers/MessengerApp';
import NewSectionForm from './components/NewSectionForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reponsive from './Reponsive';
import Question from  './components/Question';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import App from "./App"; // connected class
// import {App} from './App'; // class


const Root = ({store}) => (
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter >
                <div>

                    <Route exact path="/" component={MessengerApp}/>
                    <Route path="/newSection" component={NewSectionForm}/>
                    <Route path="/:sectionId/:questionId" component={Question}/>

                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.any
};

export default Root;
