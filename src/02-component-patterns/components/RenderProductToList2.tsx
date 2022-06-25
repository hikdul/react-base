import { product } from "../intenfaces/Interfaces"
import { ProductCard } from "./index"

export const RenderProducts2 = ({product}:{product:product}) => {
    return (

        <ProductCard
            product={product}
            className="bg-dark text-white">
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className="negrita center-text" />
                <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
    )
}