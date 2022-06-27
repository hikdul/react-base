import { useState } from "react";
import { RenderProducts } from "../components";
import { RenderShoppingCard } from "../components/RenderShoppingCard";
import { PRODUCTOS } from "../const/Productos";
import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const [shoppingCar, setShoppingCar] = useState<{[key: string]: ProductInCard }>({});

  const onProductCountChange = ({ count, product }: onChangeEventArgs) => {
    setShoppingCar((oldShoppingCar) => {
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
    })
  }

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
          <RenderProducts product={prod} value={shoppingCar[prod.id]?.count || 0} onChange={(event) => onProductCountChange(event)}/>
        ))}
      </div>
      {/* para ver el corritos de compras */}
      <div className="shoppning-car">
        {Object.entries(shoppingCar).map(([key, product]) => (
          <RenderShoppingCard key={key} product={product} onChange={(event) => onProductCountChange(event)} />
        ))}
      </div>
      <hr />
    </div>
  );
};
