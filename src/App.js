import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Home from './Screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
