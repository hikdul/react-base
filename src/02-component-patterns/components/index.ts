// esta interface es para conseguir ayuda y restricciones
import { ProductCordHOCProps } from '../intenfaces/Interfaces'

import { ProducButtons } from './ProductButtons'
// ojo con el cambio de nombre aca 
import { ProductCard as PCI } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export { ProducButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'

// de este modo le agrego una nueva propiedad a un objeto
export const ProductCard: ProductCordHOCProps = Object.assign( PCI , {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProducButtons
})

export default ProductCard