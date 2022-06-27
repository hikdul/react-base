import { useState } from "react";

import { ProducButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces";
import "../styles/custom-styles.css";

const PRODUCTOS = [
  {
    id: "1",
    title: "Cards",
  },
  {
    id: "2",
    title: "Coffee Mug",
    img: "/coffee-mug.png",
  },
  {
    id: "3",
    title: "Coffee Mug - Meme",
    img: "/coffee-mug2.png",
  },
];

export const ShoppingPage = () => {
  const [shoppingCar, setShoppingCar] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeEventArgs) => {
    setShoppingCar((oldShoppingCar) => {
      // Modo de hacerso antes de meter tantos las narices
      //  if( count === 0){
      //      // de este modo lo resolvi yo
      //      //delete oldShoppingCar[product.id]
      //      //return{
      //      //  ...oldShoppingCar
      //      //}
      //      // de este modo proponen hacerlo
      //      const {[product.id]: toDelete, ...rest} = oldShoppingCar
      //      return rest
      //  }
      //
      //  return{
      //    ...oldShoppingCar,
      //    [product.id]: {...product,count}
      //  }

      const prodInCart: ProductInCard = oldShoppingCar[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(prodInCart.count + count, 0) > 0) {
        prodInCart.count += count;
        return {
          ...oldShoppingCar,
          [product.id]: prodInCart,
        };
      }

      const {[product.id]: toDelete, ...rest} = oldShoppingCar
      return rest
    });
  };

  return (
    <div>
      <h1>Shoppin store</h1>
      <hr />
      {/* para ver los productos grandes */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {PRODUCTOS.map((prod) => (
          <ProductCard
            product={prod}
            className="bg-dark text-white"
            value={shoppingCar[prod.id]?.count || 0}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="negrita center-text" />
            <ProducButtons
              style={{ display: "flex", justifyContent: "center" }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>
      {/* para ver el corritos de compras */}
      <div className="shoppning-car">
        {Object.entries(shoppingCar).map(([key, product]) => (
          <ProductCard
            key={key}
            style={{
              width: "100px",
            }}
            onChange={(event) => onProductCountChange(event)}
            product={product}
            value={product.count}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProducButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <hr />
    </div>
  );
};
