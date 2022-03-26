import { ProductI } from "../interfaces/Interfaces";

const product1 = {
    id: "1",
    img: "./Coffee-Mug.png",
    title: "Coffe Mug -Card",
  };
  const product2 = {
    id: "2",
    img: "./Coffee-mug2.png",
    title: "Coffe Mug -Meme",
  };
  
  export const products: ProductI[] = [product1, product2];