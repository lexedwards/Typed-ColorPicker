import React, { ChangeEvent } from 'react';
import { useStore } from '../useStore';
import { backgroundSL } from '../utils';

const HSLslider = () => {

  const [{hsl} , dispatch ] = useStore() as [ColorBlock, (T : Action) => void];

  const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    dispatch({
      type: 'hsl', 
      payload: { ...hsl, [evt.target.name]: +evt.target.value } 
    });
  }

  return (
    <>
      <label className="sliders_hue">
        <div className="sliders_meta">
          <span>hue</span>
          <input
            type="number"
            min="0"
            max="360"
            name="h"
            value={hsl.h}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="360"
          name="h"
          value={hsl.h}
          onChange={handleChange}
        />
      </label>
      <label className="sliders_saturation">
        <div className="sliders_meta">
          <span>saturation</span>
          <input
            type="number"
            min="0"
            max="100"
            name="s"
            value={hsl.s}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          style={{ background: backgroundSL(hsl, 's') }}
          name="s"
          value={hsl.s}
          onChange={handleChange}
        />
      </label>
      <label className="sliders_lightness">
        <div className="sliders_meta">
          <span>lightness</span>
          <input
            type="number"
            min="0"
            max="100"
            name="l"
            value={hsl.l}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          style={{ background: backgroundSL(hsl, 'l') }}
          name="l"
          value={hsl.l}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default HSLslider;