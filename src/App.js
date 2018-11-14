import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

 // export default hot(module)(App);
export default App;
