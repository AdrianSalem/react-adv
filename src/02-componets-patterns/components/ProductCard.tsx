import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductCardPropsI, ProductContextPropsI } from "../interfaces/Interfaces";




export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardPropsI) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

