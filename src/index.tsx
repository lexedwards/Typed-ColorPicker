import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './useStore';
import { storeReducer } from './storeReducer';
import { Color } from './models/color';
import {useColorPicker} from './useColorPicker';

const initState : ColorBlock = Color.fromHEX('000');

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider reducer={storeReducer} initState={initState} >
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export { useColorPicker }