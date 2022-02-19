import { ProductCard as ProducCardHOC} from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/Interfaces';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';

// export { ProductCard } from './ProductCard';

export const ProductCard:ProductCardHOCProps =Object.assign(ProducCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductButtons
});

export default ProductCard