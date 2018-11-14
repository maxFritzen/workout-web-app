import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { hot } from 'react-hot-loader'

const App = () => (
  <div>
    <AppRouter />
  </div>
);

 export default hot(module)(App);
//export default App;
