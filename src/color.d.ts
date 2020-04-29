interface RGB {
  r : number,
  g : number,
  b : number
}

interface HSL {
  h : number,
  s : number,
  l : number
}

interface LAB {
  l : number,
  a : number,
  b : number
}

interface ColorBlock {
  hex : string;
  rgb : RGB;
  hsl : HSL;
  lab : LAB;
  getHex : () => string;
  getRGB : () => number[];
  getHSL : () => number[];
  getLAB : () => number[];
}

type reObjType = {
  [key: string] : number
}

type ConvertArr = [ number, number, number ]

interface Store {
  children : React.ReactNode;
  reducer : (state: any, action : Action) => ReducerState<any>;
  initState: ColorBlock ;
}
 
interface Action {
  type : string;
  payload : any;
}