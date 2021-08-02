import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/Store';

import AppRouter from './routes/AppRouter';


function App() {
  return (

    <Provider store={store}>
      <AppRouter/>
    </Provider>

  );
}

export default App;
