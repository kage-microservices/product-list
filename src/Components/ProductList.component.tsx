import { useSelector } from "react-redux";

export const ProductList = () => {
  // @ts-ignore
  const products = useSelector((state) => state.products.products);
  return (
    <div style={{ margin: "1rem" }}>
      {products.map((product, index) => (
        <div key={product.name} style={{ display: "flex" }}>
          <p style={{ margin: "0 1rem" }}>Product #{index}</p>
          <p style={{ margin: "0 1rem" }}>{product.name}</p>
          <p>{product.price} zł</p>
        </div>
      ))}
    </div>
  );
};
