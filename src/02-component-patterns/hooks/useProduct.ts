import { useEffect, useRef, useState } from "react"
import { onChangeArgs, product } from "../intenfaces/Interfaces"

export const useProduc = ({ onChange, product, value = 0 }: useProducArgs) => 
{
    const [counter, setCounter] = useState<number>(value)
    //doble negacion para asegurar que me entregan numeros booleanos
    // esto valor es para verificar si la funcion esta siendo controlado
    const isControlled = useRef(!!onChange)

    const AddBy = (value: number ) => 
    {   
            if(isControlled.current)
            {
                return onChange!({count: value, product})
            }

            const newValue = Math.max(counter + value , 0)
            setCounter( newValue)
            onChange && onChange({count: newValue, product })
    }

    useEffect(()=>{
        setCounter(value)
    },[value])

    return { counter, AddBy }
}

export interface useProducArgs
{
    product: product
    onChange?: (args: onChangeArgs) => void
    value?: number
}
