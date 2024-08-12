import React from 'react'
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio'

const Picker = () => {

  const state = proxy({
    current: null,
    items: {
      laces: "#ff0000",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff"
    }
  });

  const snap = useSnapshot(state);
   
  const handleColorChange = (color) => {
    state.items[snap.current] = color;
  }

  return (
    <div style={{display: snap.current ? "block" : "none",
      alignItems: "center",
      position: "relative"
    }}>
      <HexColorPicker className='picker'
        color={snap.items[snap.current]}
        onChange={handleColorChange}
      /> 
      <h1 className='heading'>{snap.current}</h1>
    </div>
  )
}

export default Picker