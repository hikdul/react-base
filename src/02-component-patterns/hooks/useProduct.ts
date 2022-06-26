import { useState } from "react"
import { onChangeArgs, product } from "../intenfaces/Interfaces"

export const useProduc = ({ onChange, product }: useProducArgs) => 
{
    const [counter, setCounter] = useState<number>(0)

    const AddBy = (value: number ) => 
    {   
            const newValue = Math.max(counter + value , 0)
            setCounter( newValue)
            onChange && onChange({count: newValue, product })
    }

    return { counter, AddBy }
}

export interface useProducArgs
{
    product: product
    onChange?: (args: onChangeArgs) => void
}
