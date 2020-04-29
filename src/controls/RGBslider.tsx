import React, { ChangeEvent } from 'react';
import { useStore } from '../useStore';
import { backgroundRGB } from '../utils';

const RGBslider = () => {

  const [{rgb} , dispatch ] = useStore() as [ColorBlock, (T : Action) => void];

  const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    dispatch({
      type: 'rgb', 
      payload: { ...rgb, [ evt.target.name ]: +evt.target.value } 
    });
  }

  console.log(rgb)

  return (
    <>
      <label className="sliders_red">
        <div className="sliders_meta">
          <span>red</span>
          <input
            type="number"
            min="0"
            max="255"
            name="r"
            value={rgb.r}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="255"
          style={{ background: backgroundRGB( rgb ,'r') }}
          name="r"
          value={rgb.r}
          onChange={handleChange}
        />
      </label>
      <label className="sliders_green">
        <div className="sliders_meta">
          <span>green</span>
          <input
            type="number"
            min="0"
            max="255"
            name="g"
            value={rgb.g}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="255"
          style={{ background: backgroundRGB( rgb ,'g')  }}
          name="g"
          value={rgb.g}
          onChange={handleChange}
        />
      </label>
      <label className="sliders_blue">
        <div className="sliders_meta">
          <span>blue</span>
          <input
            type="number"
            min="0"
            max="255"
            name="b"
            value={rgb.b}
            onChange={handleChange}
          />
        </div>
        <input
          type="range"
          min="0"
          max="255"
          style={{ background: backgroundRGB( rgb ,'b')  }}
          name="b"
          value={rgb.b}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default RGBslider;
