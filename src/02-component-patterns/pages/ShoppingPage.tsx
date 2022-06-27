import { useState } from "react";
import { RenderProducts } from "../components";
import { RenderShoppingCard } from "../components/RenderShoppingCard";
import { PRODUCTOS } from "../const/Productos";
import { useShoppingCar } from "../hooks/useShoppingCar";
import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCar, onProductCountChange } = useShoppingCar()

  return (
    <div>
      <h1>Shoppin store</h1>
      <hr />
      {/* para ver los productos grandes */}
      <div style={{display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "space-between"}}
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
  )
}
