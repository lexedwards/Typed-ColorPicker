import React, { useState, useEffect } from 'react';
import { useStore, Action } from '../useStore';

function checkHex(value:string) {
  const regMatch = /^([0-9A-F]{3}){1,2}$/i;
  const res = value.match(regMatch);
  if (!res) return undefined;
  return res[0];
}

interface Props {

}

const HexText : React.FC<Props> = () => {

  const [{hex, lab}, dispatch] = useStore() as [ColorBlock, (T : Action) => void];
  const [hexValue, setHexValue] = useState(hex)

  function handleChange (value : string) : void{
    setHexValue(prev => {
      const res = checkHex(value);
      if (typeof res === 'string') {
        dispatch( {type: 'hex', payload: res} )
        return res;
      } else {
        return value;
      }
    })
  }

  useEffect(
    () => {
      setHexValue(hex)
    }
  ,[hex])

  return (
    <>
      <div className="ColorPicker_arrow" style={{borderBottomColor: `#${hex}` || '#000'}} />
      <label 
        className="ColorPicker_display" 
        style={{backgroundColor: `#${hex}` || '#000',
        color: lab.l <= 50 ? '#FFF' : '#000'}}>
        <span>hex #</span>
        <input 
          type="text" 
          name="hexValue" 
          placeholder="#hex"
          maxLength={ 6 }
          value={hexValue}
          onChange={evt => handleChange(evt?.target?.value)}
          style={{ color: lab.l <= 50 ? '#FFF' : '#000' }}
        />
      </label>
    </>
  )
}

export {HexText}