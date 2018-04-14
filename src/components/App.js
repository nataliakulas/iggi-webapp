import React, {Component} from 'react';

import Navigation from '../components/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation color={"czarny"} >To jest nawigacja</Navigation>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
