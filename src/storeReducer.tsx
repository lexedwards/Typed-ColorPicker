import { Color } from "./models/color";

export function storeReducer (state : ColorBlock, action : Action) : ColorBlock{
  switch( action.type ) {
    case 'hex' :
      return Color.fromHEX(action.payload)
    case 'rgb' :
      return Color.fromRGB(action.payload)
    case 'hsl' :
      return Color.fromHSL(action.payload)
    default: 
      return state;
  }
}