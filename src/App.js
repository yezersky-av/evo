import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { useStrictMode } from 'react-konva';

import Section from './components/molecules/Section';

import Game from 'components/pages/Game';
import Tags from 'components/pages/Tags';

import logo from './logo.svg';
import './App.css';

function App() {
  useStrictMode(true);

  return (
    <Switch>
      <Section routes={[
        {
          path: '/', render: (props) => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          ), exact: true
        },
        { path: '/game', component: Game },
        { path: '/tags', component: Tags },
      ]} />
    </Switch>
  );
}

export default App;
