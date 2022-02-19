import { ReactElement } from "react";

export interface ProductCardPropsI {
  product: ProductI;
  children?: ReactElement | ReactElement[];
}

export interface ProductI {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextPropsI {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProductI;
}


export interface ProductCardHOCProps{
  ({children,product}:ProductCardPropsI):JSX.Element,
  Title:({title}:{title?:string})=>JSX.Element,
  Image:({img}:{img?:string})=>JSX.Element,
  Buttons:()=>JSX.Element
}
