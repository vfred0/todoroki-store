import { TypeColor } from '@core/utils/TypeColor';
import { Size } from '@core/utils/Size';
import { TypeAnimes } from './TypeAnimes';
import { TypeClothings } from './TypeClothings';

export interface Product {
  id: number;
  description: string;
  price: number;
  image: string;
  likes: number;
  color: TypeColor;
  size: Size;
  typeClothing: TypeClothings;
  typesAnimes: TypeAnimes;
}
