import React , { useState }from 'react';
import './App.css';
import {HexText} from './controls/HexText';
import HSLslider from './controls/HSLslider';
import RGBslider from './controls/RGBslider';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="ColorPicker">
      <HexText />
      <div className="ColorPicker_history"></div>
      <label className="ColorPicker_toggle">
        <span>rgb</span>
        <input type="checkbox" onChange={e => setToggle(e.target.checked)}/>
        <div className="checkboxToggle">
          <div className="checkboxToggle_dial" style={{backgroundColor: '#000'}}/>
        </div>
        <span>hsl</span>
      </label>
      <div className="ColorPicker_sliders">
        {toggle?
          (<HSLslider />)
          :
          (<RGBslider />)
        }
      </div>
    </div>
  );
}

export default App;
