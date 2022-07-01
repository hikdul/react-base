import { useEffect, useRef, useState } from "react"
import { initialValuesProductCarArgs, onChangeArgs, product } from "../intenfaces/Interfaces"

export const useProduc = ({ onChange, product ,initialValues , value = 0 }: useProducArgs) => 
{
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const AddBy = (value: number ) => 
    {   
        let newValue = ! initialValues?.maxCount ? 0
         : (initialValues?.maxCount && counter + value > 0) ?
            Math.min(counter + value , initialValues.maxCount || 0)    
         :
            Math.max(counter + value , 0)

        setCounter( newValue)
        onChange && onChange({count: newValue, product })
    }

    useEffect(()=>{
        if(!isMounted.current)
            return
        setCounter(value)
    },[value])
    
    useEffect(()=>{
        isMounted.current=true
    },[value])

    return { counter, AddBy, maxCount: initialValues?.maxCount }
}

export interface useProducArgs
{
    product: product
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: initialValuesProductCarArgs
}
