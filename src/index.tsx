import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";
import "./styles/normalize.scss"
import Navbar from "./containers/Navbar";
import QuestionsPage from "./landing/QuestionsPage";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Navbar />
        <QuestionsPage />
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
