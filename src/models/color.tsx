import convert from 'color-convert';

function reObj (val : number[], objKeys : string[]) : {} | void {
  if (val.length !== objKeys.length) return undefined;
  const res : reObjType = {};
  val.forEach((ele, i) => {
    res[objKeys[i]] = ele
  });
  return res;
}

class Color implements ColorBlock {
  constructor(
      public hex : string,
      public rgb : RGB, 
      public hsl : HSL,
      public lab : LAB) {};
      
  static fromHEX (hex : string) {
      return new Color(
        hex,
        reObj(convert.hex.rgb(hex), ['r','g','b']) as RGB,
        reObj(convert.hex.hsl(hex), ['h','s','l']) as HSL,
        reObj(convert.hex.lab(hex), ['l','a','b']) as LAB,
      )
  }

  static fromRGB (rgb : RGB) : ColorBlock{
    return new Color(
      convert.rgb.hex(Object.values(rgb) as ConvertArr) as string,
      rgb,
      reObj(convert.rgb.hsl(Object.values(rgb) as ConvertArr), ['h','s','l']) as HSL,
      reObj(convert.rgb.lab(Object.values(rgb) as ConvertArr), ['l','a','b']) as LAB,
    )
  }

  static fromHSL (hsl : HSL) : ColorBlock{
    return new Color(
      convert.hsl.hex(Object.values(hsl) as ConvertArr),
      reObj(convert.hsl.rgb(Object.values(hsl) as ConvertArr), ['r','g','b']) as RGB,
      hsl,
      reObj(convert.hsl.lab(Object.values(hsl) as ConvertArr), ['l','a','b']) as LAB,
    )
  }

  static fromLAB (lab : LAB) : ColorBlock{
    return new Color(
      convert.lab.hex(Object.values(lab) as ConvertArr),
      reObj(convert.lab.rgb(Object.values(lab) as ConvertArr), ['r','g','b']) as RGB,
      reObj(convert.lab.hsl(Object.values(lab) as ConvertArr), ['h','s','l']) as HSL,
      lab,
    )
  }

  getHex() {
    return `#${this.hex}`
  }

  getRGB() {
    return Object.values(this.rgb);
  }

  getHSL() {
    return Object.values(this.hsl);
  }

  getLAB() {
    return Object.values(this.lab);
  }

}

export {Color}