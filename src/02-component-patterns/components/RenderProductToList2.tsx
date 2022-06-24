import { product } from "../intenfaces/Interfaces"
import { ProductCard } from "./index"

export const RenderProducts2 = ({product}:{product:product}) => {
    return (
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
        </ProductCard>
    )
}