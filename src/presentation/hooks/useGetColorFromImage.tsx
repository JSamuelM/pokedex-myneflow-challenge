import { useExtractColors } from 'react-extract-colors';

export const getColorFromImage = (image: string) => {
  const { dominantColor } = useExtractColors(image)

  if (!dominantColor) {
    return '#ffffff';
  }

  return dominantColor;
}
