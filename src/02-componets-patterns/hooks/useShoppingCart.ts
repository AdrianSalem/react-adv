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
    setShoppintCart((oldShoppingCart) => {
      const productInCart: ProductInCartI = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppintCart,
    onProductCountChange
  };
};
