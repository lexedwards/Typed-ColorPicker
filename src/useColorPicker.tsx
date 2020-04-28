import { Color } from './models/color';
import { useStore, Action } from './useStore';
import { ColorBlock } from './models/colorTyped';

export const useColorPicker = () => {
  const [{rgb}] = useStore() as [ColorBlock, (T : Action) => void];
  return Color.fromRGB(rgb)
}