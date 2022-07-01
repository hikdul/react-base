import { ProducButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTOS } from "../const/Productos";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shoppin store</h1>
      <hr />
      <div style={{display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "space-between"}}
      >
        {PRODUCTOS.map( prod =>(
          <ProductCard 
           key={prod.id}  
           product={prod} 
           className="bg-dark text-white"
           style={{margin: '10px'}}
           initialValues={{count:0, maxCount: prod.cant}}>
             {
              ({reset, count, increaseBy, isMaxCountReached})=>(
                <>
                  <ProductImage 
                    className="custom-image" 
                    style={{boxShadow: '10px 10px 10px rgba(0,0,0,.2)'}} />
                  <ProductTitle className="text-bold"/>
                  <ProducButtons className="custom-buttons"/>
                  <button onClick={reset} >Reset</button>
                   { !isMaxCountReached && <button onClick={ ()=> increaseBy(2) } >+2</button> }
                  { count > 0 && <button onClick={ ()=> increaseBy(-2) } >-2</button> }                 
                  
                  <span>{count}</span>
                </>
              
              )
             }
          </ProductCard>))}       

      </div>
    </div>
  )
}
