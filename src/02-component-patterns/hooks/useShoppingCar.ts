import { useState } from "react";
import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces";


export const useShoppingCar = () =>
{

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

  return {
    shoppingCar,
    onProductCountChange
  }

}