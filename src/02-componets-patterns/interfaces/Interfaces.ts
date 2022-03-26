import { Props as ProducCardProps } from "../components/ProductCard";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


export interface ProductI {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextPropsI {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProductI;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProducCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}


export interface onChangeArgs{
  product:ProductI;
  count:number;
}

export interface ProductInCartI extends ProductI {
  count: number;
}