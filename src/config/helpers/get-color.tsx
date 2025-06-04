import { extractColors } from 'extract-colors';

export const getColorFromImage = async (image: string) => {
  extractColors(image)
    .then((value) => {
      console.log(value);
      
      return value[0].hex
    })
    .catch((error) => {
      console.error(error);
      
      return 'grey'
    })
}
