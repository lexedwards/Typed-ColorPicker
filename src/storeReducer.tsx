import { ColorBlock } from "./models/colorTyped";
import { Color } from "./models/color";
import { Action } from "./useStore";

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