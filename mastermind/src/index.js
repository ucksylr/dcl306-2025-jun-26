import React from 'react';
import ReactDOM from 'react-dom/client';
//import Mastermind from './Mastermind';
import 'bootstrap/dist/css/bootstrap.css';
import MastermindHooks from "./MastermindHooks";
import {BrowserRouter, Route, Routes} from "react-router";
import PlayerLoses from "./components/loses";
import PlayerWins from "./components/wins";

const routing = <Routes>
    <Route path="/" element={<MastermindHooks/>} exact/>
    <Route path="/wins" element={<PlayerWins/>} exact/>
    <Route path="/loses" element={<PlayerLoses/>} exact/>
</Routes>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // View
    <BrowserRouter>
        {routing}
    </BrowserRouter>
);
