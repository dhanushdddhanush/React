import React from 'react';
import NavBar from './components/NavBar/NavBar';
import LayOut from './components/LayOut/LayOut';
import Tiles from './components/Tiles/Tiles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <LayOut />
            <Tiles />
        </div>
    );
}

export default App;

