import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {TreeList} from "./components/TreeItems/TreeList";

function App() {
    return (
        <div className="App">
            <Header/>
            <TreeList/>
        </div>
    );
}

export default App;
