import { useEffect, useState } from "react"
import { onChangeArgs, product } from "../intenfaces/Interfaces"

export const useProduc = ({ onChange, product, value = 0 }: useProducArgs) => 
{
    const [counter, setCounter] = useState<number>(value)

    const AddBy = (value: number ) => 
    {   
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
