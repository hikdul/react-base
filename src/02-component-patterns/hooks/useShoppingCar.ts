import { useState } from "react";
import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces";

export const useShoppingCar = () =>
{

  const [shoppingCar, setShoppingCar] = useState<{[key: string]: ProductInCard }>({});
  const onProductCountChange = ({ count, product }: onChangeEventArgs) => {

    setShoppingCar((oldShoppingCar) => {
      if(count === 0){
        const { [product.id]: toDelete, ...rest} = oldShoppingCar
        return rest
      }
      return{
        ...oldShoppingCar,
        [product.id]: {...product, count}
      }
    })
  }

  return {
    shoppingCar,
    onProductCountChange
  }

}