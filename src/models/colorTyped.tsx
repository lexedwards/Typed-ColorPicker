export interface RGB {
  r : number,
  g : number,
  b : number
}

export interface HSL {
  h : number,
  s : number,
  l : number
}

export interface LAB {
  l : number,
  a : number,
  b : number
}

export interface ColorBlock {
  hex : string;
  rgb : RGB;
  hsl : HSL;
  lab : LAB;
  getHex : () => string;
  getRGB : () => number[];
  getHSL : () => number[];
  getLAB : () => number[];
}

export type reObjType = {
  [key: string] : number
}

export type ConvertArr = [ number, number, number ]