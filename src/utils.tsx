import convert from 'color-convert';



export function backgroundRGB (current : RGB, component : keyof RGB) : string{
  let left = {...current}, right = {...current};
  left[component] = 0;
  right[component] = 255;

  const resLeft = `rgb(${Object.values(left).join(',')})`
  const resRight = `rgb(${Object.values(right).join(',')})`
  return `linear-gradient(90deg, ${resLeft} 0%, ${resRight} 100%`;
}

export function backgroundSL (current : HSL, component : keyof HSL) : string{
  let left = {...current}, right = {...current};
  left[component] = 0;
  right[component] = 100;

  const tempConvertLeft = convert.hsl.rgb(Object.values(left) as [number, number, number]);
  const tempConvertRight = convert.hsl.rgb(Object.values(right) as [number, number, number]);

  const resLeft = `rgb(${tempConvertLeft.join(',')})`
  const resRight = `rgb(${tempConvertRight.join(',')})`

  return `linear-gradient(to right, ${resLeft} 0%, ${resRight} 100%`;
}