import { onChangeEventArgs, ProductInCard } from "../intenfaces/Interfaces"
import { ProducButtons } from "./ProductButtons"
import { ProductCard } from "./ProductCard"
import { ProductImage } from "./ProductImage"


export const RenderShoppingCard = ({onChange, product}: RenderShoppingCardProps) =>
{
    return(
          <ProductCard
            style={{
              width: "100px",
            }}
            onChange={onChange}
            product={product}
            value={product.count}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProducButtons className="custom-buttons" />
          </ProductCard>
    )
}

interface RenderShoppingCardProps
{
    onChange?: (props : onChangeEventArgs) => void 
    product:  ProductInCard 
}