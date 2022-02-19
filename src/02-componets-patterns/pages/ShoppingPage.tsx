import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  title: "Coffe Mug -Card",
  img: "./Coffee-Mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hola mundo"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={""} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};