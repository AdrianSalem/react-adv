import { useState } from "react";
import { ProductI, ProductInCartI } from "../interfaces/Interfaces";

export const useShoppingCart = () => {
  const [shoppintCart, setShoppintCart] = useState<{
    [key: string]: ProductInCartI;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: ProductI;
  }) => {
      console.log({count})
    setShoppintCart((oldShoppingCart) => {
     

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppintCart,
    onProductCountChange
  };
};
