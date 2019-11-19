import React from 'react';
import './App.css';
import Shares from './components/shares';
import { Provider } from 'react-redux' 
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
       <Shares />
    </Provider>    
  );
}

export default App;
